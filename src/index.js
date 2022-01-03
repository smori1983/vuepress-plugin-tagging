const { path } = require('@vuepress/shared-utils');
const util = require('./util');

module.exports = (options, ctx) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js'),
  ],
  clientDynamicModules() {
    const locales = ctx.siteConfig.locales || {};
    const localeResolver = new util.LocaleResolver(Object.keys(locales));

    const tagsMemo = {
      all: {},
      i18n: {},
    };

    ctx.pages.forEach((page) => {
      const locale = localeResolver.resolve(page);
      tagsMemo.i18n[locale] = tagsMemo.i18n[locale] || {};

      const tags = page.frontmatter.tags || [];
      tags.forEach((tag) => {
        const pageData = {
          key: page.key,
          title: page.title,
          path: page.path,
        };

        tagsMemo.all[tag] = tagsMemo.all[tag] || [];
        tagsMemo.all[tag].push(pageData);

        tagsMemo.i18n[locale][tag] = tagsMemo.i18n[locale][tag] || [];
        tagsMemo.i18n[locale][tag].push(pageData);
      });
    });

    const tagListAll = util.createTagList(tagsMemo.all);

    const tagListI18n = {};
    for (const locale in tagsMemo.i18n) {
      tagListI18n[locale] = util.createTagList(tagsMemo.i18n[locale]);
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
