// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portafolio-2c5.pages.dev',
  output: 'static',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true
    }
  }
});