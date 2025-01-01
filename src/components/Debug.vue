<template>
  <div>
    <h2>@dynamic/vuepress-plugin-tagging/tag-list</h2>
    <pre class="json">{{ tagList }}</pre>

    <h2>@dynamic/vuepress-plugin-tagging/tag-list-i18n</h2>
    <pre class="json">{{ tagListI18n }}</pre>

    <h2>$site.pages</h2>
    <pre class="json">{{ pages }}</pre>
  </div>
</template>

<script>
import tagList from '@dynamic/vuepress-plugin-tagging/tag-list';
import tagListI18n from '@dynamic/vuepress-plugin-tagging/tag-list-i18n';

export default {
  data() {
    return {
      tagList: null,
      tagListI18n: null,
      pages: null,
    }
  },

  mounted() {
    this.tagList = tagList;
    this.tagListI18n = tagListI18n;
    this.pages = this.$site.pages;
  }
}
</script>

<style lang="stylus" scoped>
.json {
  font-size: 12px;
  color: white;
}
</style>
