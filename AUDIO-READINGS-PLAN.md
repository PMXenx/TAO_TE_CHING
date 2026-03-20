# Audio Readings - Implementation Plan

## Overview

The Tao Te Ching PWA contains 81 passages, each with a verse text and a daily application paragraph. The average passage is roughly 86 words, totaling approximately 40,000 characters across all passages.

The app is built with vanilla HTML, CSS, and JavaScript (single-file `index.html` plus `passages-data.js`), hosted on GitHub Pages as a fully static site with service worker offline support. There is no backend server.

The goal is to add calming, meditative audio narration for each passage that fits the spiritual, contemplative theme of the app.

---

## Recommended Approach: Pre-generated MP3 Files

For a static site hosted on GitHub Pages, pre-generated MP3 files are the best approach for the following reasons:

- **One-time generation**: Audio files are created once using a TTS API, then committed to the repository as static assets. No ongoing API usage or cost.
- **No API keys exposed in client code**: Since audio is served as static files, there is no need to embed API keys or secrets in the frontend JavaScript.
- **Works offline via service worker**: MP3 files can be cached by the existing service worker, enabling audio playback even when the user has no internet connection.
- **Consistent quality across all devices**: Every user hears the same high-quality voice regardless of their browser, OS, or device. This is critical for the meditative experience.
- **Manageable total size**: At 64-96 kbps mono, each passage (roughly 30-60 seconds of audio) will be 30-90 KB. Total estimated size for all 81 files is 3-7 MB, well within GitHub Pages limits.

---

## Step 1: Generate Audio Files

### Choose a TTS Service

| Service | Free Tier | Notes |
|---------|-----------|-------|
| Google Cloud TTS (Neural2) | 100K characters/month free | Best free option; 40K chars fits in one month easily |
| ElevenLabs | 10K characters/month free | Higher quality; would require 4+ months on free tier |
| Amazon Polly (Neural) | Free for first 12 months | Good quality; requires AWS account |
| OpenAI TTS (tts-1) | No free tier | ~$0.60 one-time cost for all 81 passages |

**Recommendation**: Google Cloud TTS Neural2 is the best balance of quality, cost (free), and simplicity. The full 40K characters fit within a single month's free allocation.

### Recommended Voice Settings

- **Google Neural2**: `en-US-Neural2-D` (calm, deep male voice) or `en-US-Neural2-C` (calm female voice)
- **ElevenLabs**: "Rachel" voice (warm, clear) or "Adam" voice (calm male)
- **Speaking rate**: 0.80 to 0.85x normal speed for meditative pacing
- **Pitch**: -1.0 to -2.0 semitones (slightly lower for a grounded, contemplative feel)
- **Format**: MP3, 64-96 kbps, mono channel
- **Sample rate**: 24000 Hz (sufficient for speech)

### Generation Script

Below is a Python script outline that reads `passages-data.js`, extracts the text and application for each passage, and generates audio files using Google Cloud TTS.

```python
#!/usr/bin/env python3
"""
generate_audio.py

Generates MP3 audio files for all 81 Tao Te Ching passages.
Requires: pip install google-cloud-texttospeech
Requires: GOOGLE_APPLICATION_CREDENTIALS environment variable set to service account key path.
"""

import os
import re
import json
from google.cloud import texttospeech

# --- Configuration ---
SPEAKING_RATE = 0.82
PITCH = -1.5  # semitones
VOICE_NAME = "en-US-Neural2-D"  # calm male; use "en-US-Neural2-C" for female
LANGUAGE_CODE = "en-US"
OUTPUT_DIR = "audio"

def extract_passages(js_file_path):
    """Parse passages-data.js and extract passage number, text, and application."""
    with open(js_file_path, "r", encoding="utf-8") as f:
        content = f.read()

    passages = []
    # Match each passage object in the array
    # Extract number, text, and application fields
    number_pattern = re.compile(r'number:\s*(\d+)')
    text_pattern = re.compile(r'text:\s*"((?:[^"\\]|\\.)*)"')
    application_pattern = re.compile(r'application:\s*"((?:[^"\\]|\\.)*)"')

    # Split by passage objects (between opening braces at the right indentation)
    blocks = content.split('number:')
    for block in blocks[1:]:  # skip the part before the first "number:"
        num_match = re.match(r'\s*(\d+)', block)
        text_match = re.search(r'text:\s*"((?:[^"\\]|\\.)*)"', block)
        app_match = re.search(r'application:\s*"((?:[^"\\]|\\.)*)"', block)

        if num_match and text_match:
            num = int(num_match.group(1))
            text = text_match.group(1).replace('\\"', '"').replace('\\n', '\n')
            application = ""
            if app_match:
                application = app_match.group(1).replace('\\"', '"').replace('\\n', '\n')

            passages.append({
                "number": num,
                "text": text,
                "application": application
            })

    return sorted(passages, key=lambda p: p["number"])


def generate_audio(passage, client):
    """Generate an MP3 file for a single passage."""
    # Compose the full narration text with a pause between sections
    ssml = f"""<speak>
        <p>Passage {passage['number']}.</p>
        <break time="1s"/>
        <p>{passage['text']}</p>
        <break time="1.5s"/>
        <p>Daily Application.</p>
        <break time="0.5s"/>
        <p>{passage['application']}</p>
    </speak>"""

    synthesis_input = texttospeech.SynthesisInput(ssml=ssml)

    voice = texttospeech.VoiceSelectionParams(
        language_code=LANGUAGE_CODE,
        name=VOICE_NAME,
    )

    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3,
        speaking_rate=SPEAKING_RATE,
        pitch=PITCH,
        sample_rate_hertz=24000,
    )

    response = client.synthesize_speech(
        input=synthesis_input,
        voice=voice,
        audio_config=audio_config,
    )

    filename = f"passage-{passage['number']:02d}.mp3"
    filepath = os.path.join(OUTPUT_DIR, filename)

    with open(filepath, "wb") as out:
        out.write(response.audio_content)

    size_kb = len(response.audio_content) / 1024
    print(f"  Generated {filename} ({size_kb:.1f} KB)")

    return filepath


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    print("Extracting passages from passages-data.js...")
    passages = extract_passages("passages-data.js")
    print(f"Found {len(passages)} passages.\n")

    print("Initializing Google Cloud TTS client...")
    client = texttospeech.TextToSpeechClient()

    total_chars = 0
    for passage in passages:
        total_chars += len(passage["text"]) + len(passage["application"]) + 50  # overhead
        print(f"Generating audio for Passage {passage['number']}...")
        generate_audio(passage, client)

    print(f"\nDone. Total characters sent to API: ~{total_chars}")
    print(f"Files saved to {OUTPUT_DIR}/")


if __name__ == "__main__":
    main()
```

**To run the script:**

```bash
pip install google-cloud-texttospeech
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account-key.json"
python generate_audio.py
```

### Alternative: ElevenLabs Script

```python
import requests
import os
import re

API_KEY = "your_elevenlabs_api_key"
VOICE_ID = "21m00Tcm4TlvDq8ikWAM"  # Rachel voice
OUTPUT_DIR = "audio"

def generate_with_elevenlabs(text, passage_number):
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
    headers = {
        "xi-api-key": API_KEY,
        "Content-Type": "application/json"
    }
    data = {
        "text": text,
        "model_id": "eleven_monolingual_v1",
        "voice_settings": {
            "stability": 0.75,
            "similarity_boost": 0.75,
            "speed": 0.82
        }
    }
    response = requests.post(url, json=data, headers=headers)
    if response.status_code == 200:
        filename = f"passage-{passage_number:02d}.mp3"
        filepath = os.path.join(OUTPUT_DIR, filename)
        with open(filepath, "wb") as f:
            f.write(response.content)
        print(f"Generated {filename}")
    else:
        print(f"Error for passage {passage_number}: {response.status_code}")
```

---

## Step 2: Add Audio Files to the Repository

1. Create the `audio/` directory at the project root.
2. Place all 81 generated MP3 files inside it, named `passage-01.mp3` through `passage-81.mp3`.
3. Commit to the repository.

```bash
mkdir audio
# (copy or generate MP3 files into audio/)
git add audio/
git commit -m "Add audio readings for all 81 Tao Te Ching passages"
```

Expected total size: 3-7 MB depending on bitrate and passage lengths.

---

## Step 3: Update the Service Worker

Audio files should be cached on demand (not during install) to avoid a large initial download. When a user plays a passage's audio, it gets cached for future offline use.

### Changes to `service-worker.js`

Add audio file handling to the fetch event listener. The existing `cacheFirst` strategy already works well for this, but we should explicitly route audio requests through it.

Add the following block inside the `fetch` event listener, before the default strategy section (around line 88 in the current file, after the font handling block):

```javascript
// Handle audio file requests with cache-first strategy
if (url.pathname.startsWith('/audio/') || request.url.includes('/audio/')) {
    event.respondWith(cacheFirst(request));
    return;
}
```

This uses the existing `cacheFirst()` function, which will:
1. Check the cache first and return immediately if found.
2. If not cached, fetch from the network, cache the response, and return it.
3. On subsequent plays (including offline), the cached version is served.

**Optional: Pre-cache all audio files.** If you want all audio available offline immediately (adds 3-7 MB to initial load), add the audio paths to the `STATIC_ASSETS` array:

```javascript
const STATIC_ASSETS = [
    './',
    './index.html',
    './passages-data.js',
    './manifest.json',
    // ... existing icons ...
    './audio/passage-01.mp3',
    './audio/passage-02.mp3',
    // ... through ...
    './audio/passage-81.mp3'
];
```

This is generally not recommended unless targeted at users with poor connectivity. The cache-on-demand approach is preferred.

**Important**: After making any service worker changes, increment the cache version numbers at the top of the file:

```javascript
const CACHE_NAME = 'tao-daily-v4';       // was v3
const RUNTIME_CACHE = 'tao-runtime-v4';  // was v3
```

---

## Step 4: Update the UI

### 4a. Add the Audio Control Button to Passage HTML

In `index.html`, update the `createPassageHTML` function to include an audio play button:

```javascript
function createPassageHTML(passage) {
    const paddedNum = String(passage.number).padStart(2, '0');
    return `
        <div class="passage ${passage.number === currentPassage ? 'active' : ''}" id="passage-${passage.number}">
            <h2>Passage ${passage.number}: ${passage.title}</h2>
            <div class="passage-image" data-desc="${passage.imageDesc || passage.title}">
                <img src="${passage.image}"
                     alt="${passage.title}"
                     loading="lazy"
                     onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400';">
            </div>
            <div class="passage-content">
                <p class="passage-text">${passage.text}</p>
                <div class="daily-application">
                    <h3>Daily Application</h3>
                    <p>${passage.application}</p>
                </div>
            </div>
            <div class="audio-controls" id="audio-controls-${passage.number}">
                <button class="audio-btn" onclick="toggleAudio(${passage.number})"
                        id="audio-btn-${passage.number}"
                        title="Listen to this passage"
                        aria-label="Play audio reading">
                    <span class="audio-icon" id="audio-icon-${passage.number}">&#9654;</span>
                    <span class="audio-label" id="audio-label-${passage.number}">Listen</span>
                </button>
                <button class="audio-btn audio-stop" onclick="stopAudio()"
                        id="audio-stop-${passage.number}"
                        title="Stop audio"
                        aria-label="Stop audio"
                        style="display:none;">
                    <span>&#9632;</span>
                    <span>Stop</span>
                </button>
                <div class="audio-progress" id="audio-progress-${passage.number}" style="display:none;">
                    <div class="audio-progress-bar" id="audio-bar-${passage.number}"></div>
                </div>
            </div>
        </div>
    `;
}
```

### 4b. Add CSS Styles

Add the following styles inside the `<style>` block in `index.html`. These match the existing dark theme with gold, purple, and teal accents:

```css
/* Audio Controls */
.audio-controls {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    margin-top: 12px;
    border-top: 1px solid var(--border-mystical);
    flex-wrap: wrap;
}

.audio-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: rgba(212, 175, 55, 0.15);
    border: 1px solid var(--border-mystical);
    border-radius: 20px;
    color: var(--accent-gold);
    font-family: 'Crimson Text', Georgia, serif;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.audio-btn:hover {
    background: rgba(212, 175, 55, 0.25);
    box-shadow: var(--glow-soft);
}

.audio-btn:active {
    transform: scale(0.96);
}

.audio-btn.playing {
    background: rgba(79, 209, 199, 0.15);
    border-color: rgba(79, 209, 199, 0.4);
    color: var(--accent-teal);
}

.audio-btn.audio-stop {
    background: rgba(139, 124, 248, 0.15);
    border-color: rgba(139, 124, 248, 0.3);
    color: var(--accent-purple);
}

.audio-btn.audio-stop:hover {
    background: rgba(139, 124, 248, 0.25);
}

.audio-progress {
    flex-basis: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;
    margin-top: 4px;
}

.audio-progress-bar {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--accent-gold), var(--accent-teal));
    border-radius: 2px;
    transition: width 0.3s linear;
}

.audio-loading .audio-icon {
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
}
```

### 4c. Add JavaScript Audio Logic

Add the following JavaScript inside the `<script>` block in `index.html`:

```javascript
// --- Audio Playback ---
let currentAudio = null;
let currentAudioPassage = null;
let audioProgressInterval = null;

function toggleAudio(passageNumber) {
    // If this passage is already playing, pause it
    if (currentAudioPassage === passageNumber && currentAudio && !currentAudio.paused) {
        pauseAudio();
        return;
    }

    // If a different passage is playing, stop it first
    if (currentAudio) {
        stopAudio();
    }

    // Start playing
    const paddedNum = String(passageNumber).padStart(2, '0');
    const audioSrc = `audio/passage-${paddedNum}.mp3`;

    currentAudio = new Audio(audioSrc);
    currentAudioPassage = passageNumber;

    const btn = document.getElementById(`audio-btn-${passageNumber}`);
    const icon = document.getElementById(`audio-icon-${passageNumber}`);
    const label = document.getElementById(`audio-label-${passageNumber}`);
    const stopBtn = document.getElementById(`audio-stop-${passageNumber}`);
    const progress = document.getElementById(`audio-progress-${passageNumber}`);

    // Show loading state
    btn.classList.add('audio-loading');
    label.textContent = 'Loading...';

    currentAudio.addEventListener('canplaythrough', function onCanPlay() {
        currentAudio.removeEventListener('canplaythrough', onCanPlay);
        btn.classList.remove('audio-loading');
        btn.classList.add('playing');
        icon.innerHTML = '&#9646;&#9646;'; // pause icon
        label.textContent = 'Pause';
        stopBtn.style.display = 'inline-flex';
        progress.style.display = 'block';
        startProgressTracking(passageNumber);
    }, { once: true });

    currentAudio.addEventListener('ended', function() {
        resetAudioUI(passageNumber);
    });

    currentAudio.addEventListener('error', function() {
        btn.classList.remove('audio-loading');
        label.textContent = 'Listen';
        // Fall back to Web Speech API
        playWithSpeechSynthesis(passageNumber);
    });

    currentAudio.play().catch(function() {
        // If autoplay blocked or file missing, try speech synthesis
        btn.classList.remove('audio-loading');
        playWithSpeechSynthesis(passageNumber);
    });
}

function pauseAudio() {
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        const icon = document.getElementById(`audio-icon-${currentAudioPassage}`);
        const label = document.getElementById(`audio-label-${currentAudioPassage}`);
        const btn = document.getElementById(`audio-btn-${currentAudioPassage}`);
        icon.innerHTML = '&#9654;'; // play icon
        label.textContent = 'Resume';
        btn.classList.remove('playing');
        clearInterval(audioProgressInterval);
    }
}

function stopAudio() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    // Cancel any speech synthesis
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    if (currentAudioPassage) {
        resetAudioUI(currentAudioPassage);
        currentAudioPassage = null;
    }
    clearInterval(audioProgressInterval);
}

function resetAudioUI(passageNumber) {
    const btn = document.getElementById(`audio-btn-${passageNumber}`);
    const icon = document.getElementById(`audio-icon-${passageNumber}`);
    const label = document.getElementById(`audio-label-${passageNumber}`);
    const stopBtn = document.getElementById(`audio-stop-${passageNumber}`);
    const progress = document.getElementById(`audio-progress-${passageNumber}`);
    const bar = document.getElementById(`audio-bar-${passageNumber}`);

    if (btn) btn.classList.remove('playing', 'audio-loading');
    if (icon) icon.innerHTML = '&#9654;'; // play icon
    if (label) label.textContent = 'Listen';
    if (stopBtn) stopBtn.style.display = 'none';
    if (progress) progress.style.display = 'none';
    if (bar) bar.style.width = '0%';

    clearInterval(audioProgressInterval);
}

function startProgressTracking(passageNumber) {
    clearInterval(audioProgressInterval);
    audioProgressInterval = setInterval(function() {
        if (currentAudio && currentAudio.duration) {
            const pct = (currentAudio.currentTime / currentAudio.duration) * 100;
            const bar = document.getElementById(`audio-bar-${passageNumber}`);
            if (bar) bar.style.width = pct + '%';
        }
    }, 250);
}
```

### 4d. Auto-stop Audio on Passage Navigation

Update the existing `showPassage` function to stop any playing audio when the user navigates to a different passage. Add `stopAudio();` at the top of the function:

```javascript
function showPassage(num) {
    // Stop any playing audio when changing passages
    stopAudio();

    currentPassage = num;
    // ... rest of existing function ...
}
```

---

## Step 5: Optional Web Speech API Fallback

If the MP3 file fails to load (network error, file missing, etc.), the error handler in Step 4 already attempts to fall back to the browser's built-in speech synthesis. Here is the fallback function:

```javascript
function playWithSpeechSynthesis(passageNumber) {
    if (!window.speechSynthesis) {
        const label = document.getElementById(`audio-label-${passageNumber}`);
        if (label) label.textContent = 'Unavailable';
        return;
    }

    const passage = passages.find(p => p.number === passageNumber);
    if (!passage) return;

    const fullText = passage.text + '. . . Daily Application. ' + passage.application;
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.rate = 0.8;      // meditative pacing
    utterance.pitch = 0.9;     // slightly lower
    utterance.volume = 1.0;

    const btn = document.getElementById(`audio-btn-${passageNumber}`);
    const icon = document.getElementById(`audio-icon-${passageNumber}`);
    const label = document.getElementById(`audio-label-${passageNumber}`);
    const stopBtn = document.getElementById(`audio-stop-${passageNumber}`);

    btn.classList.add('playing');
    icon.innerHTML = '&#9646;&#9646;';
    label.textContent = 'Speaking...';
    stopBtn.style.display = 'inline-flex';

    currentAudioPassage = passageNumber;

    utterance.onend = function() {
        resetAudioUI(passageNumber);
        currentAudioPassage = null;
    };

    utterance.onerror = function() {
        resetAudioUI(passageNumber);
        currentAudioPassage = null;
    };

    window.speechSynthesis.speak(utterance);
}
```

**Limitations of Web Speech API fallback:**
- Voice quality varies significantly across browsers and operating systems.
- Some mobile browsers have limited or no voice options.
- The synthetic voice may not suit the meditative, contemplative tone.
- No progress bar tracking is available (duration is unknown in advance).
- Some browsers (especially mobile Safari) require a user gesture to start speech.

---

## Alternative: Web Speech API Only (Simpler but Lower Quality)

If you want to avoid generating and storing audio files entirely, you can implement audio using only the Web Speech API. This requires zero cost and zero storage, but the quality will be inconsistent across devices.

### Complete Implementation (add to `index.html`)

Add this button inside `createPassageHTML`, after the `.daily-application` div:

```html
<button class="audio-btn" onclick="speakPassage(${passage.number})" id="speak-btn-${passage.number}">
    <span id="speak-icon-${passage.number}">&#9654;</span>
    <span id="speak-label-${passage.number}">Listen</span>
</button>
```

Add this JavaScript:

```javascript
let currentUtterance = null;
let speakingPassage = null;

function speakPassage(passageNumber) {
    if (!window.speechSynthesis) return;

    // If already speaking this passage, stop
    if (speakingPassage === passageNumber) {
        window.speechSynthesis.cancel();
        resetSpeakUI(passageNumber);
        speakingPassage = null;
        return;
    }

    // Stop any current speech
    if (speakingPassage !== null) {
        window.speechSynthesis.cancel();
        resetSpeakUI(speakingPassage);
    }

    const passage = passages.find(p => p.number === passageNumber);
    if (!passage) return;

    const text = passage.text + ' ... Daily Application. ' + passage.application;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.8;
    utterance.pitch = 0.9;

    const icon = document.getElementById(`speak-icon-${passageNumber}`);
    const label = document.getElementById(`speak-label-${passageNumber}`);
    icon.innerHTML = '&#9632;';
    label.textContent = 'Stop';
    speakingPassage = passageNumber;

    utterance.onend = function() {
        resetSpeakUI(passageNumber);
        speakingPassage = null;
    };

    window.speechSynthesis.speak(utterance);
}

function resetSpeakUI(num) {
    const icon = document.getElementById(`speak-icon-${num}`);
    const label = document.getElementById(`speak-label-${num}`);
    if (icon) icon.innerHTML = '&#9654;';
    if (label) label.textContent = 'Listen';
}
```

**Note:** This is approximately 30 lines of JavaScript and requires no additional files, API keys, or storage. However, voice quality varies dramatically: it sounds acceptable on macOS/iOS (which have decent built-in voices) but often sounds robotic on Android and Windows. For a meditative app, the pre-generated MP3 approach is strongly recommended.

---

## Cost Summary

| Service | Free Tier | Estimated Cost for 81 Passages (~40K chars) |
|---------|-----------|----------------------------------------------|
| Google Cloud TTS Neural2 | 100K chars/month | Free (fits within monthly free tier) |
| ElevenLabs | 10K chars/month | Free (requires ~4 months on free tier) |
| Amazon Polly Neural | Free for first 12 months | Free (within trial period) |
| OpenAI TTS (tts-1) | None | ~$0.60 one-time |
| OpenAI TTS (tts-1-hd) | None | ~$1.20 one-time |
| Web Speech API (browser) | Unlimited | Free (no external service needed) |

---

## File Structure After Implementation

```
TAO_TE_CHING/
    index.html              (updated with audio controls)
    passages-data.js
    service-worker.js       (updated with audio caching)
    manifest.json
    icon-*.png
    audio/
        passage-01.mp3
        passage-02.mp3
        passage-03.mp3
        ...
        passage-79.mp3
        passage-80.mp3
        passage-81.mp3
    generate_audio.py       (optional; keep for regeneration)
```

---

## Implementation Checklist

1. [ ] Choose TTS service and create account
2. [ ] Configure voice settings (voice, rate, pitch)
3. [ ] Run generation script to produce 81 MP3 files
4. [ ] Listen to 2-3 sample files and adjust settings if needed
5. [ ] Create `audio/` directory and add all MP3 files
6. [ ] Update `service-worker.js` with audio caching and version bump
7. [ ] Update `createPassageHTML()` in `index.html` with audio controls
8. [ ] Add audio CSS styles to `index.html`
9. [ ] Add audio JavaScript (toggleAudio, pauseAudio, stopAudio, etc.) to `index.html`
10. [ ] Add `stopAudio()` call to `showPassage()` function
11. [ ] Add Web Speech API fallback function
12. [ ] Test on desktop (Chrome, Firefox, Safari)
13. [ ] Test on mobile (iOS Safari, Android Chrome)
14. [ ] Test offline playback after caching
15. [ ] Commit and deploy to GitHub Pages
