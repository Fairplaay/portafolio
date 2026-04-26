// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://portafolio-2c5.pages.dev',
  output: 'static',
  adapter: cloudflare(),
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
});