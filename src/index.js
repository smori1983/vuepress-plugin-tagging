const { path } = require('@vuepress/shared-utils');

/**
 * @param {Object} page
 * @param {string[]} locales
 */
const resolveLocale = (page, locales) => {
  for (let i = 0, len = locales.length; i < len; i++) {
    if (locales[i] === '/') {
      continue;
    }

    if (page.regularPath.indexOf(locales[i]) === 0) {
      return locales[i];
    }
  }

  return '/';
};

module.exports = (options, ctx) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js'),
  ],
  clientDynamicModules() {
    const locales = ctx.siteConfig.locales || {};

    const hasLocales = Object.keys(locales).length > 0;

    const tagsMemo = {
      all: {},
      locales: {},
    };

    ctx.pages.forEach((page) => {
      const tags = page.frontmatter.tags || [];
      tags.forEach((tag) => {
        tagsMemo.all[tag] = tagsMemo.all[tag] || [];
        tagsMemo.all[tag].push({
          key: page.key,
          title: page.title,
          path: page.path,
        });
      });

      if (hasLocales) {
        const locale = resolveLocale(page, Object.keys(locales));
        tagsMemo.locales[locale] = tagsMemo.locales[locale] || {};
        tags.forEach((tag) => {
          tagsMemo.locales[locale][tag] = tagsMemo.locales[locale][tag] || [];
          tagsMemo.locales[locale][tag].push({
            key: page.key,
            title: page.title,
            path: page.path,
          });
        });
      }
    });

    for (const tag in tagsMemo.all) {
      tagsMemo.all[tag].sort((a, b) => {
        return a.title < b.title ? -1 : 1;
      });
    }

    for (const locale in tagsMemo.locales) {
      for (const tag in tagsMemo.locales[locale]) {
        tagsMemo.locales[locale][tag].sort((a, b) => {
          return a.title < b.title ? -1 : 1;
        });
      }
    }

    const tagList = [];
    for (const tag in tagsMemo.all) {
      tagList.push({
        name: tag,
        pages: tagsMemo.all[tag],
      });
    }

    tagList.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });

    const tagListI18n = {};
    for (const locale in tagsMemo.locales) {
      tagListI18n[locale] = [];
      for (const tag in tagsMemo.locales[locale]) {
        tagListI18n[locale].push({
          name: tag,
          pages: tagsMemo.locales[locale][tag],
        });
      }
    }

    for (const locale in tagListI18n) {
      tagListI18n[locale].sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      });
    }

    return [
      {
        name: 'vuepress-plugin-tagging/tag-list.js',
        content: `export default ${JSON.stringify(tagList, null, 2)}`,
      },
      {
        name: 'vuepress-plugin-tagging/tag-list-i18n.js',
        content: `export default ${JSON.stringify(tagListI18n, null, 2)}`,
      },
    ];
  },
});
