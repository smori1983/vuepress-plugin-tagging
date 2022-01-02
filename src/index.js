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

/**
 * @param {Object[]} pages
 */
const sortPages = (pages) => {
  pages.sort((a, b) => {
    return a.title < b.title ? -1 : 1;
  });
};

const createTagList = (tagPages) => {
  const result = [];

  for (const tag in tagPages) {
    result.push({
      name: tag,
      pages: tagPages[tag],
    });
  }

  return result;
};

/**
 * @param {Object[]} tagList
 */
const sortTags = (tagList) => {
  tagList.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });
};

module.exports = (options, ctx) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js'),
  ],
  clientDynamicModules() {
    const locales = ctx.siteConfig.locales || {};

    const tagsMemo = {
      all: {},
      locales: {},
    };

    ctx.pages.forEach((page) => {
      const locale = resolveLocale(page, Object.keys(locales));
      tagsMemo.locales[locale] = tagsMemo.locales[locale] || {};

      const tags = page.frontmatter.tags || [];
      tags.forEach((tag) => {
        const pageData = {
          key: page.key,
          title: page.title,
          path: page.path,
        };

        tagsMemo.all[tag] = tagsMemo.all[tag] || [];
        tagsMemo.all[tag].push(pageData);

        tagsMemo.locales[locale][tag] = tagsMemo.locales[locale][tag] || [];
        tagsMemo.locales[locale][tag].push(pageData);
      });
    });

    for (const tag in tagsMemo.all) {
      sortPages(tagsMemo.all[tag]);
    }

    for (const locale in tagsMemo.locales) {
      for (const tag in tagsMemo.locales[locale]) {
        sortPages(tagsMemo.locales[locale][tag]);
      }
    }

    const tagList = createTagList(tagsMemo.all);

    sortTags(tagList);

    const tagListI18n = {};
    for (const locale in tagsMemo.locales) {
      tagListI18n[locale] = createTagList(tagsMemo.locales[locale]);
    }

    for (const locale in tagListI18n) {
      sortTags(tagListI18n[locale]);
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
