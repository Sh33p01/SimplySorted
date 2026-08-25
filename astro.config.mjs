// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
const SITE = 'https://simplysorted.co.za';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  server: {
    port: 4321,
  },
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
