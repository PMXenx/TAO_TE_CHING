# 📱 Tao Te Ching PWA - Mobile App

A lightweight, offline-capable Progressive Web App for daily Tao Te Ching reflections. Optimized for mobile devices with swipe navigation and installable as a native app.

## ✨ Features

- **81 Tao Te Ching passages** with daily practical applications
- **Offline support** - works without internet after first load
- **Swipe navigation** - natural mobile gestures
- **Install as app** - adds to home screen like native app
- **Daily passage** - automatic daily selection
- **Random passage** - discover new wisdom
- **Remembers progress** - saves your last viewed passage
- **Lightweight** - < 500KB total size
- **No ads, no tracking** - completely private

## 📲 Quick Install on Your Phone

### Option 1: Direct from Browser (Easiest)

1. Open `index.html` in Chrome on your Android phone
2. Chrome will show "Add to Home Screen" banner
3. Tap "Install" 
4. App icon appears on home screen!

### Option 2: Host on GitHub Pages (Share with Friends)

1. **Create GitHub account** (free at github.com)

2. **Create new repository:**
   - Name: `tao-daily-app`
   - Set as Public
   - Don't initialize with README

3. **Upload files:**
   - Click "uploading an existing file"
   - Drag all files from `tao-pwa` folder
   - Commit changes

4. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: main, folder: / (root)
   - Save

5. **Share link:**
   ```
   https://[your-username].github.io/tao-daily-app
   ```

6. **Friends install:**
   - Open link in Chrome
   - "Add to Home Screen" appears
   - Tap Install!

## 🛠️ Files Structure

```
tao-pwa/
├── index.html           # Main app file
├── manifest.json        # PWA configuration
├── service-worker.js    # Offline functionality
├── icon-generator.html  # Generate icons
├── icon-*.png          # App icons (various sizes)
└── README.md           # This file
```

## 🎨 Generate Icons

1. Open `icon-generator.html` in any browser
2. Click each icon to download
3. Or click "Download All Icons"
4. Place downloaded icons in same folder

## 📦 Alternative: Create APK File

### Using PWABuilder (No Coding!)

1. Upload to GitHub Pages first (see above)
2. Go to [pwabuilder.com](https://www.pwabuilder.com)
3. Enter your GitHub Pages URL
4. Click "Start"
5. Select "Android" package
6. Download APK
7. Share APK via WhatsApp/Email

### Using Capacitor (More Control)

```bash
# Install Node.js first from nodejs.org

# Install Capacitor
npm init -y
npm install @capacitor/core @capacitor/android @capacitor/cli

# Initialize project
npx cap init "Tao Daily" com.yourdomain.taodaily

# Copy web files to www folder
mkdir www
cp index.html manifest.json service-worker.js *.png www/

# Add Android platform
npx cap add android

# Sync files
npx cap sync

# Open in Android Studio
npx cap open android

# Build APK in Android Studio:
# Build → Build Bundle(s) / APK(s) → Build APK(s)
```

## 🚀 Local Testing

### On Desktop:
1. Open `index.html` in Chrome
2. Press F12 for DevTools
3. Click phone icon for mobile view
4. Test swipe with mouse drag

### On Android:
1. Enable Developer Mode:
   - Settings → About Phone
   - Tap "Build Number" 7 times

2. Enable USB Debugging:
   - Settings → Developer Options
   - Enable "USB Debugging"

3. Connect phone to computer

4. Open Chrome on computer:
   - Go to `chrome://inspect`
   - See your phone listed
   - Click "inspect" to debug

## 📱 Features Breakdown

### Swipe Navigation
- **Swipe left**: Next passage
- **Swipe right**: Previous passage
- Visual indicators show swipe direction

### Keyboard Support (for testing)
- **Arrow Left**: Previous passage
- **Arrow Right**: Next passage

### Quick Actions
- **Today button**: Jump to daily passage (based on day of year)
- **Random button**: Random passage selection

### Offline Mode
- All passages cached after first visit
- Images cached progressively
- Works completely offline

## 🔧 Customization

### Change Colors
Edit CSS variables in `index.html`:
```css
:root {
    --bg-primary: #1a1a2e;      /* Main background */
    --accent-gold: #d4af37;     /* Golden accents */
    --accent-purple: #8b7cf8;   /* Purple elements */
    --accent-teal: #4fd1c7;     /* Teal highlights */
}
```

### Modify Content
Passages are in the JavaScript array in `index.html`:
```javascript
const passages = [
    {
        number: 1,
        title: "The Way that can be spoken",
        text: "...",
        application: "...",
        image: "..."
    },
    // ... more passages
];
```

## 📊 Performance

- **Initial load**: ~200KB
- **With images cached**: ~2-3MB
- **Offline capable**: Yes
- **Install size**: < 1MB
- **Works on**: Android 5+, iOS 11.3+

## 🤝 Sharing

### Share with friends:
1. Host on GitHub Pages (free)
2. Send them the link
3. They install in 2 taps

### Share APK directly:
1. Generate APK using PWABuilder
2. Send via WhatsApp/Email
3. They enable "Unknown Sources"
4. Install APK

## 📝 License

Free to use and share. Based on public domain Tao Te Ching translations.

## 🙏 Support

If you enjoy this app:
- Share with friends seeking wisdom
- Star the GitHub repository
- Contribute improvements

---

**Remember**: The Way that can be coded is not the eternal Way! 🌊