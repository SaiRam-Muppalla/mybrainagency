// Simple analytics event dispatcher. Replace or extend with a real provider later.
type AnalyticsPayload = Record<string, unknown> & { ts?: number };

export function track(event: string, payload: AnalyticsPayload = {}) {
  try {
    const full = { event, ts: Date.now(), ...payload };
    // Window dispatch (for future provider hook-in)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('analytics:event', { detail: full }));
      // Optional: queue into dataLayer if present
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(full);
    }
    // Debug (dev only)
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.debug('[analytics]', full);
    }
  } catch {/* swallow */}
}

export function trackPerf(label: string, start: number) {
  track('perf:timing', { label, ms: Date.now() - start });
}
