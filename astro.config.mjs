import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://bluwy.github.io',
  base: '/astro-cdn-test',
  integrations: [mdx(), sitemap()]
})
