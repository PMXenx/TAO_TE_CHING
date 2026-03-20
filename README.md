# Tao Te Ching - Daily Reflection App

A beautiful Progressive Web App (PWA) for daily Tao Te Ching wisdom and reflection.

![Tao Te Ching App](TAO%20UI_Screenshot.jpg)

## Live App

**Access the app here:** [https://pmxenx.github.io/tao-te-ching-app/index.html](https://pmxenx.github.io/tao-te-ching-app/index.html)

## Features

- **81 Complete Passages** from the Tao Te Ching with meaningful thematic titles
- **Beautiful Photography** with overlay text for each passage
- **Daily Application** sections for practical wisdom
- **Today's Passage** - automatically shows the passage for today
- **Random Passage** - discover wisdom unexpectedly
- **Swipe Gestures** - swipe left/right to navigate passages
- **Keyboard Navigation** - use arrow keys on desktop
- **Offline Support** - works completely offline after first visit
- **Installable** - add to your home screen as a native app
- **Dark Theme** - gold, purple, and teal accents on a deep navy background

## Quick Installation

### For Android (Automatic Install Prompt)

1. **Open the app URL** in Chrome on your Android phone:
   ```
   https://pmxenx.github.io/tao-te-ching-app/index.html
   ```
2. **Wait for the install prompt** to appear at the bottom of the screen
3. **Tap "Install"** or "Add to Home screen"
4. **Open the app** from your home screen - it works offline!

**Alternative method if prompt doesn't appear:**
- Tap the menu (three dots) > "Install app" or "Add to Home screen"

### For iPhone/iPad (Manual Installation)

**You must use Safari** (not Chrome) for installation to work.

1. **Open the app URL** in Safari on your iOS device:
   ```
   https://pmxenx.github.io/tao-te-ching-app/index.html
   ```
2. **Tap the Share button** (box with arrow pointing up)
3. **Scroll down** and tap **"Add to Home Screen"**
4. **Tap "Add"** in the top right corner
5. **Find the app icon** on your home screen and tap to open

See [IOS-INSTALLATION-GUIDE.md](IOS-INSTALLATION-GUIDE.md) for detailed iOS instructions.

## How to Use

### Navigation

- **Next/Previous Buttons** - Navigate through passages sequentially
- **Dropdown Selector** - Jump to any specific passage
- **Today's Passage** - View the passage designated for today
- **Random** - Discover a random passage for inspiration
- **Swipe Gestures** - Swipe left for next, right for previous (mobile)
- **Keyboard** - Use arrow keys (desktop)

### Features

- **Counter Display** - Shows current passage number (e.g., "22 / 81")
- **Image Overlays** - Each passage has a beautiful photo with meaningful text
- **Daily Applications** - Practical advice for applying the wisdom
- **State Persistence** - App remembers your last viewed passage for the day
- **Offline Mode** - Works without internet after first visit

## Sharing the App

See [SHARING-GUIDE.md](SHARING-GUIDE.md) for detailed sharing instructions.

**Quick share message:**
```
Check out this beautiful Tao Te Ching app:
https://pmxenx.github.io/tao-te-ching-app/index.html

Android: Open in Chrome, tap "Install" when prompted
iPhone: Open in Safari, tap Share > "Add to Home Screen"
```

## Troubleshooting

### App won't install on Android
- Make sure you're using **Chrome browser**
- Try the manual method: Menu (three dots) > "Add to Home screen"
- Clear Chrome cache: Settings > Apps > Chrome > Storage > Clear Cache

### App won't install on iPhone/iPad
- You **must use Safari** (Chrome on iOS doesn't support PWA installation)
- There is no automatic install prompt on iOS - use the Share button
- Make sure you're running iOS 11.3 or later
- Clear Safari cache: Settings > Safari > Clear History and Website Data

### Images won't load
- Check your internet connection (images load from Unsplash on first view)
- Once cached, images work offline

### Offline mode doesn't work
- Load the app online at least once first
- Visit a few passages to allow caching
- Close and reopen the app

## Technical Details

### Built With

- **Pure HTML/CSS/JavaScript** - No frameworks, no build tools
- **Progressive Web App (PWA)** - Installable and offline-capable
- **Service Worker** - Cache-first strategy for assets, network-first for navigation
- **Responsive Design** - Mobile-first approach
- **Unsplash** - High-quality photography
- **Google Fonts** - Cinzel (headers), Crimson Text (body)

### Browser Compatibility

**Android:**
- Chrome - Best experience, automatic install prompt
- Edge - Fully supported with install prompt
- Firefox - Works but limited PWA support

**iOS:**
- Safari (iOS 11.3+) - Required for installation (manual only)
- Chrome/Firefox on iOS - Cannot install as PWA (iOS limitation)

**Desktop:**
- Chrome - Fully supported with install option
- Edge - Fully supported with install option
- Firefox - Works but limited PWA support

### Project Structure

```
index.html          - Main app (HTML, CSS, JS all inline)
passages-data.js    - All 81 passages with titles, text, applications, images
manifest.json       - PWA configuration (app name, icons, shortcuts)
service-worker.js   - Offline caching (version tao-daily-v4)
icon-*.png          - App icons (8 sizes: 72px to 512px)
CLAUDE.md           - Project context for Claude Code sessions
```

### Key Documentation

- [QUICK-START.md](QUICK-START.md) - Fast deployment guide
- [ANDROID-DEPLOYMENT-GUIDE.md](ANDROID-DEPLOYMENT-GUIDE.md) - Android deployment details
- [IOS-INSTALLATION-GUIDE.md](IOS-INSTALLATION-GUIDE.md) - iOS installation details
- [SHARING-GUIDE.md](SHARING-GUIDE.md) - How to share the app
- [AUDIO-READINGS-PLAN.md](AUDIO-READINGS-PLAN.md) - Plan for adding audio readings feature

## Development

### Local Testing

```bash
python -m http.server 8000
```
Then open http://localhost:8000 in your browser.

### Deployment

Push to the `main` branch. GitHub Pages auto-deploys in 1-2 minutes.

### Service Worker Updates

When changing cached assets, bump the cache version in `service-worker.js` (e.g., change `tao-daily-v3` to `tao-daily-v4`). Otherwise users will see stale cached content.

## Credits

- **Tao Te Ching** - Ancient Chinese text attributed to Laozi
- **Images** - [Unsplash](https://unsplash.com) photographers
- **Fonts** - Google Fonts (Cinzel, Crimson Text)

## License

This is a personal educational project. The Tao Te Ching text is in the public domain.
