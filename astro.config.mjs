import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://bluwy.github.io',
  base: '/astro-cdn-test',
  build: {
    assetsPrefix: 'https://astro-cdn-test.pages.dev'
  },
  integrations: [mdx(), sitemap()],
  experimental: {
    assets: true
  }
})
