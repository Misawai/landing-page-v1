module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'MineNTU 臺大麥塊',
  description: 'MineNTU 是專屬於臺大生的 Minecraft 伺服器，由一群臺大學生創立、管理。目前有一個創造伺服器，大家都在裡面蓋臺大。',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    smoothScroll: true,
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/images/minentu-logo.png',
    nav: [
      {
        text: '公告與守則',
        link: '/terms-and-conditions/',
      },
      {
        text: '申請規則',
        link: '/requests/'
      },
      {
         text: '作者群',
         link: '/team/'
       },
       {
         text: '素材下載',
         link: '/wallpaper/'
       },
      // {
      //   text: '送我們一些椰子 🥥',
      //   link: 'https://paypal.me/maxchou'
      // },
      {
        text: '猴園線上看',
        link: 'https://bluemine.myntu.me/#world:41:90:-616:94:0:0.89:0:0:perspective'
      },
      {
        text: '我要加入 🐵',
        link: 'https://forms.gle/XSyaXqTk6knEvFpUA'
      }
    ],
    sidebar: {
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    ['@vuepress/google-analytics', {
      'ga': 'G-WCSSK6H6FC'
    }],
    ['container', {
      type: 'important',
      defaultTitle: '',
    }],
    ['container', {
      type: 'col-wrapper',
      defaultTitle: '',
    }],
    ['container', {
      type: 'col-full',
      defaultTitle: '',
    }],
    ['container', {
      type: 'col-half',
      defaultTitle: '',
    }],
    ['container', {
      type: 'col-pic',
      defaultTitle: '',
    }],
    ['container', {
      type: 'col-word',
      defaultTitle: '',
    }],
    ['container', {
      type: 'col-third',
      defaultTitle: '',
    }],
  ]
}
