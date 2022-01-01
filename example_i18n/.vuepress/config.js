module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress (en)',
    },
    '/ja/': {
      lang: 'ja-JP',
      title: 'VuePress (ja)',
    },
  },

  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        nav: [
          { text: 'Tag1', link: '/tag1.html' },
          { text: 'Tag2', link: '/tag2.html' },
        ],
        sidebar: [
          { collapsable: false, title: 'cat1', children: ['/cat1/page1', '/cat1/page2', '/cat1/page3'] },
          { collapsable: false, title: 'cat2', children: ['/cat2/page4', '/cat2/page5', '/cat2/page6'] },
        ],
      },
      '/ja/': {
        selectText: '言語選択',
        label: '日本語',
        nav: [
          { text: 'タグ一覧1', link: '/ja/tag1.html' },
          { text: 'タグ一覧2', link: '/ja/tag2.html' },
        ],
        sidebar: [
          { collapsable: false, title: 'カテゴリ1', children: ['/ja/cat1/page1', '/ja/cat1/page2', '/ja/cat1/page3'] },
          { collapsable: false, title: 'カテゴリ2', children: ['/ja/cat2/page4', '/ja/cat2/page5', '/ja/cat2/page6'] },
        ],
      },
    },
  },

  plugins: [
    require('../../src'),
  ],
};
