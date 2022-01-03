module.exports = {
  title: 'Hello VuePress',

  themeConfig: {
    nav: [
      { text: 'Debug', link: '/tags_debug.html' },
      { text: 'Tags (all-1)', link: '/tags_all_type1.html' },
      { text: 'Tags (all-2)', link: '/tags_all_type2.html' },
    ],
    sidebar: [
      { collapsable: false, title: 'cat1', children: ['/cat1/page1', '/cat1/page2', '/cat1/page3'] },
      { collapsable: false, title: 'cat2', children: ['/cat2/page1', '/cat2/page2', '/cat2/page3'] },
      { collapsable: false, title: 'cat3', children: ['/cat3/page1'] },
    ]
  },

  plugins: [
    require('../../src'),
  ],
};
