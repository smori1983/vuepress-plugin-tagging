const { path } = require('@vuepress/shared-utils');
const util = require('./util');

module.exports = (options, ctx) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js'),
  ],
  clientDynamicModules() {
    const locales = ctx.siteConfig.locales || {};
    const memo = new util.TagsMemo(Object.keys(locales));

    memo.addPages(ctx.pages);

    const tagData = memo.build();

    return [
      {
        name: 'vuepress-plugin-tagging/tag-list.js',
        content: `export default ${JSON.stringify(tagData.all(), null, 2)}`,
      },
      {
        name: 'vuepress-plugin-tagging/tag-list-i18n.js',
        content: `export default ${JSON.stringify(tagData.i18n(), null, 2)}`,
      },
    ];
  },
});
