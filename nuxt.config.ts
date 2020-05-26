import { Configuration } from '@nuxt/types'
import dotenv from 'dotenv'
import routes from './src/prismic/routes'
dotenv.config()

const config: Configuration = {
  mode: 'universal',
  head: {
    title: 'Farmacia Libertà',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt boilerplate for Prismic' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    '@fortawesome/fontawesome-free/css/all.min.css',
    '~/assets/scss/style.scss'
  ],
  pageTransition: {
    name: 'page'
  },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv'
  ],
  plugins: [
    '~/plugins/prismic-accessor.ts',
    '~/plugins/components.js',
    '~/plugins/filters.js'
  ],
  modules: [
    '@nuxtjs/prismic',
    '@nuxtjs/style-resources'
  ],

  dotenv: {
    path: '.',
    systemvars: true
  },
  env: {
    SITE_NAME: process.env.SITE_NAME!,
    DOMAIN: process.env.DOMAIN!,
    DEFAULT_LOCALE: process.env.DEFAULT_LOCALE!
  },
  prismic: {
    endpoint: process.env.PRISMIC_ENDPOINT,
    linkResolver: '~/prismic/link-resolver.ts',
    htmlSerializer: '~/prismic/html-serializer.ts'
  },
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/helpers.scss',
      '~/assets/scss/sections.scss',
      '~/assets/scss/single-sections.scss',
      '~/assets/scss/elements.scss',
      '~/assets/scss/typography.scss'
    ]
  },
  generate: {
    fallback: true,
    routes
  },
  // build: {
  //   extend(config, ctx) {
  //   }
  // },
  transpileDependencies: [
    'vuex-module-decorators'
  ],
  srcDir: 'src',
  typescript: {
    typeCheck: {
      eslint: true
    }
  }
}

export default config
