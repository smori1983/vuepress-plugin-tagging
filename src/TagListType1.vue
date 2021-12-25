<template>
  <div>
    <ul class="tags">
      <li v-for="tag in tagList" class="tag">
        <p class="tag-name">{{ tag.name }}</p>
        <ul class="tag-pages">
          <li v-for="page in tag.pages" class="tag-page">
            <a :href="page.regularPath">
              <span class="tag-page-title">{{ page.title }}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import tagList from '@dynamic/vuepress-plugin-tagging/tag-list';

export default {
  data() {
    return {
      tagList: [],
    };
  },

  mounted() {
    this.tagList = tagList;
  }
};
</script>

<style lang="stylus" scoped>
</style>
