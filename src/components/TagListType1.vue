<template>
  <div>
    <ul class="tags">
      <li v-for="tag in tagList" class="tag">
        <p class="tag-name">{{ tag.name }}</p>
        <page-list
          v-bind:page-keys="tag.pages"
        ></page-list>
      </li>
    </ul>
  </div>
</template>

<script>
import PageList from './PageList.vue';

export default {
  components: {
    PageList,
  },

  props: {
    tagList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
