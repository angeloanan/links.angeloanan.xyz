import { defineConfig, passthroughImageService } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import cloudflare from '@astrojs/cloudflare'
import node from '@astrojs/node'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress()],
  // output: 'hybrid',
  // adapter: cloudflare({
  //   mode: 'advanced'
  // }),
  image: {
    service: passthroughImageService()
  }
  // adapter: node({
  //   mode: 'standalone'
  // })
})
