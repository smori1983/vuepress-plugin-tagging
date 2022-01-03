const { path } = require('@vuepress/shared-utils');
const util = require('./util');

module.exports = (options, ctx) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js'),
  ],
  clientDynamicModules() {
    const locales = ctx.siteConfig.locales || {};
    const memo = new util.TagsMemo(Object.keys(locales));

    ctx.pages.forEach((page) => {
      const tags = page.frontmatter.tags || [];
      const pageData = {
        key: page.key,
        title: page.title,
        path: page.path,
        regularPath: page.regularPath,
      };
      memo.add(tags, pageData);
    });

    return [
      {
        name: 'vuepress-plugin-tagging/tag-list.js',
        content: `export default ${JSON.stringify(memo.tagListAll(), null, 2)}`,
      },
      {
        name: 'vuepress-plugin-tagging/tag-list-i18n.js',
        content: `export default ${JSON.stringify(memo.tagListI18n(), null, 2)}`,
      },
    ];
  },
});
