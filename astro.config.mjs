// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(open decision): confirm final domain with Carolyn before launch.
// This drives canonical URLs, sitemap.xml and the LocalBusiness JSON-LD.
const SITE = 'https://simplysorted.co.za';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  server: {
    // Pinned so the F5 launch config always finds the site at the same URL.
    // `strictPort` fails loudly instead of silently sliding to 4322 when an
    // old server is still running.
    port: 4321,
    strictPort: true,
  },
  build: {
    // Emit /about/index.html so URLs stay extension-less and canonical.
    format: 'directory',
  },
  compressHTML: true,
});
