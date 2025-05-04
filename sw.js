// Service Worker for Portfolio Website - Optimized for content blocker compatibility
// Implements cache strategies for faster loading and offline support

const CACHE_NAME = 'dhruv-portfolio-cache-v1';

// Assets to cache immediately on service worker installation
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  // Use relative paths instead of absolute paths for better content blocker compatibility
  'assets/Dhruv-Avatar.png',
  'assets/avatar.png'
];

// Cache max age in milliseconds (7 days)
const CACHE_MAX_AGE = 7 * 24 * 60 * 60 * 1000;

// Install event - precache key resources with error handling
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE_NAME);
      // Cache each asset individually so one failure doesn't stop the others
      for (const asset of PRECACHE_ASSETS) {
        try {
          await cache.add(asset);
        } catch (assetError) {
          console.warn(`Failed to cache asset ${asset}:`, assetError);
        }
      }
      return self.skipWaiting();
    } catch (err) {
      console.error('Service worker installation failed:', err);
      // Continue even if caching fails
      return self.skipWaiting();
    }
  })());
});

// Activate event - clean up old caches with error handling
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    try {
      const cacheKeys = await caches.keys();
      await Promise.all(
        cacheKeys.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
      return self.clients.claim();
    } catch (err) {
      console.error('Service worker activation failed:', err);
      // Continue despite errors
      return self.clients.claim();
    }
  })());
});

// Helper: Should this request be cached?
const shouldCache = (url) => {
  // Simpler check to avoid regex that might be flagged
  const path = new URL(url).pathname;
  const fileExt = path.split('.').pop().toLowerCase();
  
  const staticExts = ['css', 'js', 'ttf', 'woff', 'woff2', 'png', 'jpg', 'svg', 'ico'];
  const staticPaths = ['/assets/', '/fonts/', '/static/'];
  
  // Check file extensions
  if (staticExts.includes(fileExt)) {
    return true;
  }
  
  // Check paths
  for (const staticPath of staticPaths) {
    if (path.includes(staticPath)) {
      return true;
    }
  }
  
  // Check if root path or index.html
  if (path === '/' || path === '/index.html') {
    return true;
  }
  
  return false;
};

// Fetch event with better error handling - safer implementation
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip requests to other origins - avoid cross-origin issues
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Use a safer try/catch approach
  event.respondWith((async () => {
    try {
      // For HTML requests - network first, fallback to cache
      const requestURL = new URL(event.request.url);
      if (requestURL.pathname === '/' || 
          requestURL.pathname.endsWith('.html') || 
          event.request.headers.get('accept')?.includes('text/html')) {
        try {
          // Try network first
          const networkResponse = await fetch(event.request);
          if (networkResponse.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          }
        } catch (err) {
          // Network fetch failed, try cache
          console.log('Network fetch failed for HTML, using cache');
        }
        
        // If network fails, use cache
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // If cache fails too, try the index page as fallback
        return caches.match('/index.html');
      }
      
      // For assets - stale-while-revalidate with safety measures
      if (shouldCache(event.request.url)) {
        // Try cache first
        const cachedResponse = await caches.match(event.request);
        
        // Start fetching from network in parallel
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            if (networkResponse.ok) {
              // Update cache if response is good
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(err => {
            console.log('Network fetch failed for asset:', err);
            // Return null on fetch failure to handle in next step
            return null;
          });
        
        // Return cached response immediately if available, otherwise wait for fetch
        if (cachedResponse) {
          // Background update cache but return cached version immediately
          return cachedResponse;
        } else {
          // No cached version, must wait for network
          const networkResult = await fetchPromise;
          return networkResult || new Response('Resource not available', { 
            status: 408, 
            headers: { 'Content-Type': 'text/plain' } 
          });
        }
      }
      
      // For all other requests - normal fetch
      return fetch(event.request);
    } catch (err) {
      console.error('Error in service worker fetch handler:', err);
      // Provide a fallback response
      return new Response('Network error occurred', { 
        status: 500, 
        headers: { 'Content-Type': 'text/plain' } 
      });
    }
  })());
});

// Simplified cache cleanup that won't trigger content blockers
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CACHE_CLEANUP') {
    cleanupCache();
  }
});

function cleanupCache() {
  caches.open(CACHE_NAME).then(cache => {
    cache.keys().then(requests => {
      const now = Date.now();
      requests.forEach(request => {
        // Use a safer approach without response headers
        // Delete items older than 7 days based on install time estimate
        const url = new URL(request.url);
        if (url.searchParams.has('t')) {
          const timestamp = parseInt(url.searchParams.get('t'), 10);
          if (now - timestamp > CACHE_MAX_AGE) {
            cache.delete(request);
          }
        }
      });
    });
  });
}