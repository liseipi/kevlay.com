export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kevlay凯伏莱',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'kevlay凯伏莱, kevlay, 凯伏莱, 美国Kevlay' },
      { hid: 'description', name: 'description', content: '美国Kevlay是基于瑞士Weidemann专业技术平台的成员之一，是专为电力系统自动化提供优质服务的专业设备供应服务商，长期致力于领先技术的产品和真诚优质的服务与广泛的客户及伙伴进行合作，并时刻准备着投入到他们的需求中去。我们习惯于把从实践中获得的经验加以不断地总结，并把这些富有成就的或深刻教训的经验用于不断改进今天和明天的每一个工作细节。' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'baidu-site-verification', content: 'code-zOBdXOSZhl' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
    '@/assets/css/swiper.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@assets/script/jquery.min'},
    {src: '@assets/script/swiper.min'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Define the dist directory for your Nuxt application
  generate: {
    dir: 'docs'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[name].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[name].js',
      css: ({ isDev }) => isDev ? '[name].css' : '[name].css',
      json: ({ isDev }) => isDev ? '[name].json' : '[name].json',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[name].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[name].[ext]'
    },
  }
}
