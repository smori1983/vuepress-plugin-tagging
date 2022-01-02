const { path } = require('@vuepress/shared-utils');
const util = require('./util');

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
    sortPages(tagPages[tag]);

    result.push({
      name: tag,
      pages: tagPages[tag],
    });
  }

  sortTags(result);

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
    const localeResolver = new util.LocaleResolver(Object.keys(locales));

    const tagsMemo = {
      all: {},
      locales: {},
    };

    ctx.pages.forEach((page) => {
      const locale = localeResolver.resolve(page);
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

    const tagListAll = createTagList(tagsMemo.all);

    const tagListI18n = {};
    for (const locale in tagsMemo.locales) {
      tagListI18n[locale] = createTagList(tagsMemo.locales[locale]);
    }

    return [
      {
        name: 'vuepress-plugin-tagging/tag-list.js',
        content: `export default ${JSON.stringify(tagListAll, null, 2)}`,
      },
      {
        name: 'vuepress-plugin-tagging/tag-list-i18n.js',
        content: `export default ${JSON.stringify(tagListI18n, null, 2)}`,
      },
    ];
  },
});
