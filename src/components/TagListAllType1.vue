<template>
  <tag-list-type1 v-bind:tag-list="tagList"></tag-list-type1>
</template>

<script>
import tagList from '@dynamic/vuepress-plugin-tagging/tag-list';
import TagListType1 from './TagListType1.vue';

export default {
  components: {
    TagListType1,
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
