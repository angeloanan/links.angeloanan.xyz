import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import cloudflare from '@astrojs/cloudflare'
import node from '@astrojs/node'
import image from '@astrojs/image'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), partytown(), sitemap(), prefetch()],
  output: 'server',
  adapter: cloudflare({})
  // adapter: node({
  //   mode: 'standalone'
  // })
})
