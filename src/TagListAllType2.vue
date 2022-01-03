<template>
  <tag-list-type2 v-bind:tag-list="tagList"></tag-list-type2>
</template>

<script>
import tagList from '@dynamic/vuepress-plugin-tagging/tag-list';
import TagListType2 from './TagListType2';

export default {
  components: {
    TagListType2,
  },

  data() {
    return {
      tagList: [],
    };
  },

  mounted() {
    this.tagList = tagList;
  },
};
</script>
