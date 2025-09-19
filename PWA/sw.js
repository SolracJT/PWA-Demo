self.addEventListener('install', () => console.log('SW installed'));
self.addEventListener('fetch', () => {}); // Required, even if empty