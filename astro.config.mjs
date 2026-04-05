import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';

export default defineConfig({
  site: 'https://portafolio-jesusgarcia.pages.dev',
  integrations: [
    tailwind(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || '',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: true,
      apiVersion: '2024-01-01',
      visualEditing: {
        mode: 'live-visual-editing',
        overlay: true,
      },
    }),
  ],
  output: 'static',
  prefetch: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    ssr: {
      noExternal: ['daisyui'],
    },
  },
});