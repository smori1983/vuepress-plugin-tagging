class LocaleResolver {
  /**
   * @param {string[]} locales
   */
  constructor(locales) {
    /**
     * @private
     */
    this._locales = locales;
  }

  /**
   * @param {Object} page
   * @returns {string}
   */
  resolve(page) {
    for (let i = 0, len = this._locales.length; i < len; i++) {
      if (this._locales[i] === '/') {
        continue;
      }

      if (page.regularPath.indexOf(this._locales[i]) === 0) {
        return this._locales[i];
      }
    }

    return '/';
  }
}

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
 * @param {Object[]} pages
 */
const sortPages = (pages) => {
  pages.sort((a, b) => {
    return a.title < b.title ? -1 : 1;
  });
};

/**
 * @param {Object[]} tagList
 */
const sortTags = (tagList) => {
  tagList.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });
};


module.exports.LocaleResolver = LocaleResolver;
module.exports.createTagList = createTagList;
