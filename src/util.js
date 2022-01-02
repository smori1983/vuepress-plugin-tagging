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

module.exports.LocaleResolver = LocaleResolver;
