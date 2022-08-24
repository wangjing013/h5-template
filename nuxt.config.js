require('dotenv').config()
const ENV = process.env.EXT_ENV
export default {
  globalName: 'app',
  globals: {
    id: (globalName) => globalName,
  },
  srcDir: './src',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'live',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,user-scalable=0,viewport-fit=cover',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '//res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js',
        body: true,
      },
    ],
  },
  // runtime env webpack define
  env: {
    EXT_ENV: ENV,
  },
  // loadingIndicator
  loadingIndicator: {
    name: 'three-bounce',
    color: '#3B8070',
    background: 'white',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/common.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vant',
    '@/plugins/axios',
    '@/plugins/error-catch',
    '@/plugins/console.client',
    '@/plugins/amfe-flexible.client',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/dotenv',
      {
        /* module options */
        filename: `../.env.${ENV}`,
      },
    ],
    '@nuxtjs/composition-api/module',
    '@nuxtjs/device',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-pxtorem': {
          rootValue: 75,
          propList: ['*'],
          exclude: ['/node_modules/*'],
        },
      },
      preset: {
        autoprefixer: {
          grid: true,
        },
      },
    },
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            // 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
            style: false,
          },
          'vant',
        ],
      ],
    },
  },
  // Router config
  router: {
    base: '/',
  },

  // Server Configuration
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
}
