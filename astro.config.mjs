import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const sanity = (await import('@sanity/astro')).default;

export default defineConfig({
  site: 'https://jesusgarcia.dev',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    tailwind(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || '',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: true,
    }),
  ],
  output: 'static',
  prefetch: true,
  build: {
    inlineStylesheets: 'auto',
  },
});