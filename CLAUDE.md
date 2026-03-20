# Tao Te Ching - Daily Reflection PWA

## Project Overview
A Progressive Web App for reading all 81 passages of the Tao Te Ching with daily applications, photography, and offline support. Deployed via GitHub Pages.

- Live URL: https://pmxenx.github.io/tao-te-ching-app/index.html
- Repository: https://github.com/PMXenx/tao-te-ching-app
- Stack: Pure vanilla HTML, CSS, JavaScript (no frameworks, no build tools)
- Hosting: GitHub Pages (static files only, no backend)

## Architecture

### Core Files
- `index.html` - Single-page application. Contains ALL HTML, CSS, and JavaScript inline. This is the entire app.
- `passages-data.js` - Data file defining the `passages` array with all 81 entries. Each passage has: number, title, text, application, image (Unsplash URL), imageDesc
- `manifest.json` - PWA manifest. Defines app name, icons, start URL, display mode, shortcuts
- `service-worker.js` - Handles offline caching. Cache version is `tao-daily-v4`. Uses cache-first for assets, network-first for navigation. IMPORTANT: bump cache version when changing cached assets.

### Icons
- 8 PNG icons (72px to 512px) - golden yin-yang on dark navy background
- Referenced in manifest.json with `"purpose": "any"` (not maskable, to avoid safe-zone cropping)

### Key App Behaviors
- On first visit each day: shows "Today's Passage" (day-of-year mod 81)
- Persists last-viewed passage in localStorage (per-day)
- URL hash routing (#passage-N) for bookmarking and browser history
- Install prompt appears after 30 seconds via beforeinstallprompt API
- Swipe gestures and keyboard arrow navigation supported

### Design System
- Dark theme: navy gradient background (#0f0f23 to #16213e)
- Accent colors: gold (#d4af37) for headers, purple (#8b7cf8) for titles/buttons, teal (#4fd1c7) for applications/special buttons
- Fonts: Cinzel (headers), Crimson Text (body) via Google Fonts
- Animated starfield background effect

## Development

### Local Testing
Serve over HTTP for service worker support:
```
python -m http.server 8000
```

### Deployment
Push to `main` branch. GitHub Pages auto-deploys in 1-2 minutes.

### Service Worker Updates
When changing any cached asset, you MUST bump the cache version in service-worker.js (e.g., `tao-daily-v4`). Otherwise users will get stale cached versions.

## Important Notes
- The app previously had a legacy version (`spiritual_tao_app.html`) that has been removed. All references should point to `index.html`.
- Images are served from Unsplash CDN. They cache in the service worker's runtime cache after first load.
- iOS PWA installation requires Safari (not Chrome). No automatic install prompt on iOS - must use Share > Add to Home Screen.
- The `passages-data.js` file uses a global `passages` variable (not ES modules) because the app has no build system.

## Future Work
- Audio readings: see AUDIO-READINGS-PLAN.md for implementation details
- Potential features: bookmarking favorites, search, notifications
