class LocaleResolver {
  /**
   * @param {string[]} locales
   */
  constructor(locales) {
    /**
     * @type {string}
     * @private
     */
    this._default = '/';

    /**
     * @private
     */
    this._locales = [this._default, ...locales];
  }

  /**
   * @returns {string[]}
   */
  locales() {
    return this._locales;
  }

  /**
   * @param {Object} page
   * @returns {string}
   */
  resolve(page) {
    for (let i = 0, len = this._locales.length; i < len; i++) {
      if (this._locales[i] === this._default) {
        continue;
      }

      if (page.regularPath.indexOf(this._locales[i]) === 0) {
        return this._locales[i];
      }
    }

    return this._default;
  }
}

class TagsMemo {
  /**
   * @param {string[]} locales
   */
  constructor(locales) {
    /**
     * @private
     */
    this._all = {};

    /**
     * @private
     */
    this._i18n = {};

    /**
     * @type {LocaleResolver}
     * @private
     */
    this._localeResolver = new LocaleResolver(locales);
    this._localeResolver.locales().forEach((locale) => {
      this._i18n[locale] = {};
    });
  }

  /**
   * @param {string[]} tags
   * @param {Object} pageData
   */
  add(tags, pageData) {
    const locale = this._localeResolver.resolve(pageData);

    tags.forEach((tag) => {
      this._all[tag] = this._all[tag] || [];
      this._all[tag].push(pageData);

      this._i18n[locale][tag] = this._i18n[locale][tag] || [];
      this._i18n[locale][tag].push(pageData);
    });
  }

  tagListAll() {
    return createTagList(this._all);
  }

  tagListI18n() {
    const result = {};

    for (const locale in this._i18n) {
      result[locale] = createTagList(this._i18n[locale]);
    }

    return result;
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

module.exports.TagsMemo = TagsMemo;
