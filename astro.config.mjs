// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// TODO(launch): simplysorted.co.za belongs to a different business. Points at
// the Workers URL until a domain is chosen, so that no canonical, sitemap or
// og:image URL claims a domain we don't own. Drives canonicals, the sitemap and
// the LocalBusiness schema.
const SITE = 'https://simplysorted.office-simplysorted.workers.dev';

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
