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
          { text: 'Debug', link: '/tags_debug.html' },
          { text: 'Tags (all-1)', link: '/tags_all_type1.html' },
          { text: 'Tags (all-2)', link: '/tags_all_type2.html' },
          { text: 'Tags (i18n-1)', link: '/tags_i18n_type1.html' },
          { text: 'Tags (i18n-2)', link: '/tags_i18n_type2.html' },
        ],
        sidebar: [
          { collapsable: false, title: 'cat1', children: ['/cat1/page1', '/cat1/page2'] },
          { collapsable: false, title: 'cat2', children: ['/cat2/page4', '/cat2/page5'] },
        ],
      },
      '/ja/': {
        selectText: '言語選択',
        label: '日本語',
        nav: [
          { text: 'デバッグ', link: '/ja/tags_debug.html' },
          { text: 'タグ一覧 (all-1)', link: '/ja/tags_all_type1.html' },
          { text: 'タグ一覧 (all-2)', link: '/ja/tags_all_type2.html' },
          { text: 'タグ一覧 (i18n-1)', link: '/ja/tags_i18n_type1.html' },
          { text: 'タグ一覧 (i18n-2)', link: '/ja/tags_i18n_type2.html' },
        ],
        sidebar: [
          { collapsable: false, title: 'カテゴリ1', children: ['/ja/cat1/page1', '/ja/cat1/page2'] },
          { collapsable: false, title: 'カテゴリ2', children: ['/ja/cat2/page4', '/ja/cat2/page5'] },
        ],
      },
    },
  },

  plugins: [
    require('../../src'),
  ],
};
