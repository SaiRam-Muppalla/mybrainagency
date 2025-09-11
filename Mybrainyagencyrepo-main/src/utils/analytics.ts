// Simple analytics event dispatcher. Replace or extend with a real provider later.
type AnalyticsPayload = Record<string, unknown> & { ts?: number };

const queue: any[] = [];
let flushScheduled = false;
let lastFlush = 0;
const FLUSH_INTERVAL = 5000; // 5s
const MAX_BATCH = 25;

function scheduleFlush(immediate = false) {
  if (typeof window === 'undefined') return;
  if (immediate) {
    flush();
    return;
  }
  if (!flushScheduled) {
    flushScheduled = true;
    setTimeout(() => {
      flush();
    }, FLUSH_INTERVAL);
  }
}

function flush() {
  flushScheduled = false;
  if (!queue.length) return;
  const batch = queue.splice(0, MAX_BATCH);
  lastFlush = Date.now();
  const blob = new Blob([JSON.stringify(batch)], { type: 'application/json' });
  const url = '/api/track';
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, blob);
  } else {
    fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(batch) }).catch(() => {});
  }
}

export function track(event: string, payload: AnalyticsPayload = {}) {
  try {
    const full = { event, ts: Date.now(), ...payload };
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('analytics:event', { detail: full }));
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(full);
      queue.push(full);
      if (queue.length >= MAX_BATCH) scheduleFlush(true);
      else if (Date.now() - lastFlush > FLUSH_INTERVAL) scheduleFlush();
    }
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.debug('[analytics]', full);
    }
  } catch {/* ignore */}
}

export function trackPerf(label: string, start: number) {
  track('perf:timing', { label, ms: Date.now() - start });
}

// Core Web Vitals capture (FCP, LCP, CLS) simplified
let perfObserved = false;
export function initWebVitals() {
  if (perfObserved || typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  perfObserved = true;
  try {
    const po = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'paint' && (entry as any).name === 'first-contentful-paint') {
          track('webvital.fcp', { value: entry.startTime });
        }
        if (entry.entryType === 'largest-contentful-paint') {
          track('webvital.lcp', { value: (entry as any).renderTime || entry.startTime });
        }
        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          track('webvital.cls', { value: (entry as any).value });
        }
      }
    });
    try { po.observe({ type: 'paint', buffered: true } as any); } catch {}
    try { po.observe({ type: 'largest-contentful-paint', buffered: true } as any); } catch {}
    try { po.observe({ type: 'layout-shift', buffered: true } as any); } catch {}
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') flush();
    });
    window.addEventListener('beforeunload', () => flush());
  } catch {/* noop */}
}

// Auto init after hydration
if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') initWebVitals();
  else window.addEventListener('load', () => initWebVitals());
}

