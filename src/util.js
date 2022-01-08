/**
 * @typedef {import('@vuepress/core/lib/node/Page')} Page
 */

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
     * @type {Set<string>}
     * @private
     */
    this._locales = new Set([this._default, ...locales]);
  }

  /**
   * @returns {string[]}
   */
  locales() {
    return Array.from(this._locales);
  }

  /**
   * @param {Page} page
   * @returns {string}
   */
  resolve(page) {
    for (const item of this._locales) {
      if (item === this._default) {
        continue;
      }

      if (page.regularPath.indexOf(item) === 0) {
        return item;
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
   * @param {Page[]} pages
   */
  addPages(pages) {
    pages.forEach((page) => {
      this.addPage(page);
    });
  }

  /**
   * @param {Page} page
   */
  addPage(page) {
    const locale = this._localeResolver.resolve(page);
    const tags = page.frontmatter.tags || [];
    const pageData = page.toJson();

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
    if (a.title === b.title) {
      return a.key < b.key ? -1 : 1;
    }

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
