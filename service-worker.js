// Service Worker for Tao Daily PWA
const CACHE_NAME = 'tao-daily-v1';
const RUNTIME_CACHE = 'tao-runtime-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Font URLs to cache
const FONT_URLS = [
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&family=Crimson+Text:ital,wght@0,400;1,400&display=swap',
  'https://fonts.gstatic.com/'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting()) // Activate immediately
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => name !== CACHE_NAME && name !== RUNTIME_CACHE)
            .map(name => {
              console.log('Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim()) // Take control immediately
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle API calls differently (if any)
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Handle image requests with cache-first strategy
  if (request.destination === 'image' || url.hostname === 'images.unsplash.com') {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Handle font requests
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Handle navigation requests (HTML)
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html')
        .then(response => response || fetch(request))
        .catch(() => {
          // Return offline page if available
          return caches.match('/index.html');
        })
    );
    return;
  }

  // Default strategy: cache first, then network
  event.respondWith(cacheFirst(request));
});

// Cache-first strategy
async function cacheFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    // Return cached version and update cache in background
    fetchAndCache(request);
    return cached;
  }
  
  try {
    const response = await fetch(request);
    
    // Cache successful responses
    if (response.ok) {
      const clone = response.clone();
      cache.put(request, clone);
    }
    
    return response;
  } catch (error) {
    console.error('Fetch failed:', error);
    // Return placeholder or cached version if available
    return cache.match(request);
  }
}

// Network-first strategy
async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  
  try {
    const response = await fetch(request);
    
    // Cache successful responses
    if (response.ok) {
      const clone = response.clone();
      cache.put(request, clone);
    }
    
    return response;
  } catch (error) {
    console.error('Network request failed, falling back to cache:', error);
    return cache.match(request);
  }
}

// Fetch and cache in background (for stale-while-revalidate)
async function fetchAndCache(request) {
  try {
    const cache = await caches.open(RUNTIME_CACHE);
    const response = await fetch(request);
    
    if (response.ok) {
      cache.put(request, response.clone());
    }
  } catch (error) {
    // Silent fail - this is background update
    console.log('Background cache update failed:', error);
  }
}

// Handle messages from the app
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  // Cache all images for offline use
  if (event.data && event.data.type === 'CACHE_IMAGES') {
    cacheImages(event.data.urls);
  }
});

// Cache images for offline viewing
async function cacheImages(urls) {
  const cache = await caches.open(RUNTIME_CACHE);
  
  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        await cache.put(url, response);
      }
    } catch (error) {
      console.log('Failed to cache image:', url);
    }
  }
}

// Periodic sync for updates (if supported)
self.addEventListener('periodicsync', event => {
  if (event.tag === 'update-check') {
    event.waitUntil(checkForUpdates());
  }
});

async function checkForUpdates() {
  try {
    const response = await fetch('/manifest.json');
    const manifest = await response.json();
    
    // Check version or other update logic
    console.log('Checking for updates...', manifest);
  } catch (error) {
    console.log('Update check failed:', error);
  }
}

// Background sync for offline actions (if supported)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-passages') {
    event.waitUntil(syncPassages());
  }
});

async function syncPassages() {
  // Sync any offline changes when back online
  console.log('Syncing passages...');
}

// Push notifications (if needed in future)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body || 'Time for your daily Tao reflection',
      icon: '/icon-192.png',
      badge: '/icon-72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Read Passage',
          icon: '/icon-72.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icon-72.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification('Tao Daily', options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'explore') {
    // Open the app to today's passage
    event.waitUntil(
      clients.openWindow('/?action=today')
    );
  }
});

console.log('Service Worker loaded');