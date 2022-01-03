<template>
  <div>
    <ul class="tags">
      <li v-for="tag in tagList" class="tag">
        <p class="tag-name">{{ tag.name }}</p>
        <page-list
          v-bind:pages="tag.pages"
        ></page-list>
      </li>
    </ul>
  </div>
</template>

<script>
import tagList from '@dynamic/vuepress-plugin-tagging/tag-list';
import PageList from './PageList';

export default {
  components: {
    PageList,
  },

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
