# mybrainagency

This repo contains a React + TypeScript + Vite project located in `Mybrainyagencyrepo-main/`.

What’s new:
- Production-grade booking flow using Calendly in a 2-step modal (prefill from form, success detection)
- CTAs wired to open the booking modal (Header, Home hero/CTA, mobile Sticky CTA)
- Accessible Modal (ESC, click-outside, scroll lock)

## Quick start

- Install dependencies
- Build the app
- Preview the production build

### Commands

```bash
cd Mybrainyagencyrepo-main
npm ci
npm run build
npm run preview -- --port 5173 --host 0.0.0.0
```

Then open http://localhost:5173/.

## Booking flow setup

1) Copy environment example and edit values:

```bash
cd Mybrainyagencyrepo-main
cp .env.example .env.local
# set VITE_CALENDLY_URL to your scheduling link
# optionally set VITE_AGENCY_EMAIL and VITE_EMAIL_PROVIDER
```

2) Start the dev server and test the modal via any "Book a Free Consultation" button.

Environment variables:
- `VITE_CALENDLY_URL` — your Calendly event link
- `VITE_AGENCY_EMAIL` — fallback email for mailto compose
- `VITE_EMAIL_PROVIDER` — set to `none` to disable server notifications (default)

## Project structure

Key files and folders inside `Mybrainyagencyrepo-main/`:

- `src/` — React app source (components, pages, utils)
- `public/` — static assets
- `vite.config.ts` — Vite configuration
- `tailwind.config.js` — Tailwind CSS configuration
- `package.json` — scripts and dependencies

There is also a `project/` subfolder which contains a similar Vite setup.