import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';

export default defineConfig({
  site: 'https://fairplaay-portafolio.pages.dev',
  integrations: [
    tailwind(),
    sitemap(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'ix45pdgt',
      dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: true,
      apiVersion: '2024-01-01',
    }),
  ],
});