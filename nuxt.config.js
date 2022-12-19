export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'daffascript_frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Logo2.svg' },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/uikit@3.6.22/dist/css/uikit.min.css" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Plus Jakarta Sans " },
      { rel: "stylesheet", href: "sweetalert2/dist/sweetalert2.css" },
    ],
    script: [
        { src: "https://cdn.jsdelivr.net/npm/uikit@3.15.10/dist/js/uikit.min.js" },
        { src: "https://cdn.jsdelivr.net/npm/uikit@3.15.10/dist/js/uikit-icons.min.js" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/style.css",
    // "~/assets/cms/style.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://127.0.0.1:8000',
    credentials: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  //login
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
      },
    },
  },

}
