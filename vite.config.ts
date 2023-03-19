import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
      includeAssets: ['/favicon.png'],
      manifest: {
        name: 'My Weight Tracker',
        start_url: "/",
        short_name: 'Weight Tracker',
        description: 'My Weight Tracker',
        theme_color: '#18181b',
				background_color: '#18181b',
        icons: [
          {
            src: '/favicon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
	]
});
