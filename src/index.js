const { path } = require('@vuepress/shared-utils');

module.exports = (options, ctx) => ({
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js'),
  ],
  clientDynamicModules() {
    const tagsMemo = {};
    ctx.pages.forEach((page) => {
      const tags = page.frontmatter.tags || [];
      tags.forEach((tag) => {
        tagsMemo[tag] = tagsMemo[tag] || [];
        tagsMemo[tag].push({
          key: page.key,
          title: page.title,
          regularPath: page.regularPath,
        });
      });
    });

    for (const tag in tagsMemo) {
      tagsMemo[tag].sort((a, b) => {
        return a.title < b.title ? -1 : 1;
      });
    }

    const tagList = [];
    for (const tag in tagsMemo) {
      tagList.push({
        name: tag,
        pages: tagsMemo[tag],
      });
    }

    tagList.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });

    return [
      {
        name: 'vuepress-plugin-tagging/tag-list.js',
        content: `export default ${JSON.stringify(tagList, null, 2)}`,
      },
    ];
  },
});
