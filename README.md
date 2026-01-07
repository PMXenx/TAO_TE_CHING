# Tao Te Ching - Daily Reflection App

A beautiful Progressive Web App (PWA) for daily Tao Te Ching wisdom and reflection.

![Tao Te Ching App](TAO%20UI_Screenshot.jpg)

## Live App

**Access the app here:** [https://pmxenx.github.io/tao-te-ching-app/index.html](https://pmxenx.github.io/tao-te-ching-app/index.html)

## Features

- **81 Complete Passages** from the Tao Te Ching
- **Beautiful Photography** with overlay text for each passage
- **Daily Application** sections for practical wisdom
- **Today's Passage** - automatically shows the passage for today
- **Random Passage** - discover wisdom unexpectedly
- **Swipe Gestures** - swipe left/right to navigate passages
- **Keyboard Navigation** - use arrow keys on desktop
- **Offline Support** - works completely offline after first visit
- **Installable** - add to your home screen as a native app
- **Elegant UI** - gold header, purple titles, teal accents

## Quick Installation

### For Android (Automatic Install Prompt)

**✅ Chrome shows an automatic install banner**

1. **Open the app URL** in Chrome on your Android phone:
   ```
   https://pmxenx.github.io/tao-te-ching-app/index.html
   ```

2. **Wait for the install prompt** to appear at the bottom of the screen
   - Chrome will automatically show "Add Tao Daily to Home screen"

3. **Tap "Install"** or "Add to Home screen"

4. **Open the app** from your home screen - it works offline!

**Alternative method if prompt doesn't appear:**
- Tap the menu (⋮) → "Install app" or "Add to Home screen"

### For iPhone/iPad (Manual Installation Only)

**⚠️ No automatic prompt - manual installation required**

**IMPORTANT:** You must use **Safari** (not Chrome) for installation to work.

1. **Open the app URL** in Safari on your iOS device:
   ```
   https://pmxenx.github.io/tao-te-ching-app/index.html
   ```

2. **Tap the Share button** (box with arrow pointing up at the bottom of the screen)

3. **Scroll down** in the share menu and tap **"Add to Home Screen"**

4. **Tap "Add"** in the top right corner

5. **Find the app icon** on your home screen and tap to open!

**Note:** iOS doesn't support automatic install prompts like Android. Users must manually add via the Share button.

## How to Use

### Navigation

- **Next/Previous Buttons** - Navigate through passages sequentially
- **Dropdown Selector** - Jump to any specific passage
- **Today's Passage** - View the passage designated for today
- **Random** - Discover a random passage for inspiration
- **Swipe Gestures** - Swipe left for next, right for previous
- **Keyboard** - Use arrow keys (desktop only)

### Features

- **Counter Display** - Shows current passage number (e.g., "22 / 81")
- **Image Overlays** - Each passage has a beautiful photo with meaningful text
- **Daily Applications** - Practical advice for applying the wisdom
- **State Persistence** - App remembers your last viewed passage
- **Offline Mode** - Works without internet after first visit

## Sharing the App

Want to share this app with friends and family? See the [SHARING-GUIDE.md](SHARING-GUIDE.md) for detailed instructions.

**Quick share message:**
```
Check out this beautiful Tao Te Ching app:
https://pmxenx.github.io/tao-te-ching-app/index.html

📱 Android: Open in Chrome, tap "Install" when prompted
🍎 iPhone: Open in Safari, tap Share → "Add to Home Screen"
   (Note: Safari only - no automatic prompt on iOS)
```

## Troubleshooting

### App won't install on Android

- Make sure you're using **Chrome browser** (not Firefox, Samsung Internet, etc.)
- Try the manual method: Menu (⋮) → "Add to Home screen"
- Clear Chrome cache: Settings → Apps → Chrome → Storage → Clear Cache

### App won't install on iPhone/iPad

- Make sure you're using **Safari** (not Chrome - Chrome on iOS doesn't support PWA installation)
- There is **no automatic install prompt** on iOS - you must use Share button
- Tap Share button (box with arrow) → Scroll → "Add to Home Screen"
- Make sure you're running iOS 11.3 or later for offline support
- Clear Safari cache: Settings → Safari → Clear History and Website Data

### Images won't load

- Check your internet connection (images load from Unsplash)
- Wait a few seconds for images to load
- Once cached, images work offline

### Old UI appears instead of new UI

- This was a service worker caching issue that has been **FIXED**
- If you see the old UI with emojis instead of photos:
  1. Clear browser cache completely
  2. Uninstall the PWA from home screen
  3. Visit the URL again in Chrome
  4. Install fresh from the browser

### Offline mode doesn't work

- Load the app online at least once first
- Visit 2-3 passages to allow caching
- Close and reopen the app
- Wait 30 seconds for service worker to cache assets

## Technical Details

### Built With

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **Progressive Web App (PWA)** - Installable and offline-capable
- **Service Worker** - Caching and offline support
- **Responsive Design** - Mobile-first approach
- **Unsplash API** - High-quality images

### Browser Compatibility

**Android:**
- ✅ Chrome (Android) - **Best experience** - Automatic install prompt, full PWA support
- ✅ Edge (Android) - Fully supported with install prompt
- ⚠️ Firefox (Android) - Works but limited PWA support, no install prompt
- ⚠️ Samsung Internet - Works but may have installation issues

**iOS:**
- ✅ Safari (iOS 11.3+) - **Required for installation** - Manual only via Share button
- ❌ Chrome (iOS) - Cannot install as PWA (iOS limitation)
- ❌ Firefox (iOS) - Cannot install as PWA (iOS limitation)

**Desktop:**
- ✅ Chrome (Desktop) - Fully supported with install option
- ✅ Edge (Desktop) - Fully supported with install option
- ⚠️ Firefox (Desktop) - Works but limited PWA support

### Key Files

- `index.html` - Main app interface
- `passages-data.js` - All 81 passages with images and applications
- `manifest.json` - PWA configuration
- `service-worker.js` - Offline caching and service worker logic
- `icon-*.png` - App icons (8 sizes from 72px to 512px)

## Development

### Service Worker Fix (Important!)

The app had a critical bug where it would revert to an old UI version after installation. This was caused by the service worker hardcoding the wrong HTML file.

**The fix:**
- Updated `service-worker.js` to cache `index.html` instead of `spiritual_tao_app.html`
- Changed navigation handler to serve the actual requested file
- Bumped cache version to `v2` to force refresh

See [SERVICE-WORKER-FIX-GUIDE.md](SERVICE-WORKER-FIX-GUIDE.md) for detailed technical analysis.

### Local Development

1. Clone the repository
2. Open `index.html` in a browser
3. For PWA features, serve over HTTPS:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Then access via ngrok or similar for HTTPS
   ```

### Updating the App

To update the deployed version:

1. Make your changes to the files
2. Commit and push to the `main` branch
3. GitHub Pages will auto-update in 1-2 minutes

## Documentation

- [UI-RESTORATION-PLAN.md](UI-RESTORATION-PLAN.md) - Original UI specifications
- [UI-IMPLEMENTATION-REPORT.md](UI-IMPLEMENTATION-REPORT.md) - Complete test results
- [ANDROID-DEPLOYMENT-GUIDE.md](ANDROID-DEPLOYMENT-GUIDE.md) - Comprehensive deployment instructions
- [QUICK-START.md](QUICK-START.md) - Fast-track deployment guide
- [SERVICE-WORKER-FIX-GUIDE.md](SERVICE-WORKER-FIX-GUIDE.md) - Service worker bug fix details
- [SHARING-GUIDE.md](SHARING-GUIDE.md) - How to share with others

## Credits

- **Tao Te Ching** - Ancient Chinese text attributed to Laozi
- **Images** - [Unsplash](https://unsplash.com) photographers
- **Fonts** - Google Fonts (Cinzel, Crimson Text)

## License

This is a personal educational project. The Tao Te Ching text is in the public domain.

## Support

For issues or questions:
- Check the troubleshooting section above
- Review the comprehensive documentation files
- Check browser console for errors (F12)

---

**Enjoy your daily dose of Tao wisdom!**

Visit the app: [https://pmxenx.github.io/tao-te-ching-app/index.html](https://pmxenx.github.io/tao-te-ching-app/index.html)
