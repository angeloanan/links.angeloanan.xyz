import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import cloudflare from '@astrojs/cloudflare'
import node from '@astrojs/node'
import prefetch from '@astrojs/prefetch'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), prefetch(), compress({})]
  // output: 'server',
  // adapter: cloudflare({
  //   mode: 'advanced'
  // })
  // adapter: node({
  //   mode: 'standalone'
  // })
})
