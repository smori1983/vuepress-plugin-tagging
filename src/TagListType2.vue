<template>
  <div>
    <div class="tag-list">
      <span
        v-for="tag in tagList"
        :class="{ selected: isSelectedTag(tag.name) }"
        @click="selectTag(tag.name)"
      >{{ tag.name }}</span>
    </div>
    <ul class="tag-pages" v-if="currentTag">
      <li v-for="page in currentTag.pages">
        <page-link v-bind:page="page"></page-link>
      </li>
    </ul>
  </div>
</template>

<script>
import tagList from '@dynamic/vuepress-plugin-tagging/tag-list';
import PageLink from './PageLink';

export default {
  components: {
    PageLink,
  },

  data() {
    return {
      tagList: [],
      currentTag: null,
    };
  },

  mounted() {
    this.tagList = tagList;
  },

  methods: {
    isSelectedTag(tagName) {
      return this.currentTag && this.currentTag.name === tagName;
    },

    selectTag(tagName) {
      for (let i = 0, len = this.tagList.length; i < len; i++) {
        if (this.tagList[i].name === tagName) {
          this.currentTag = this.tagList[i];
          break;
        }
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.tag-list {
  padding: 1rem;
  border: 1px solid $borderColor;

  span {
    display: inline-block;
    cursor: pointer;
    margin-right: 1 rem;
    line-height: 2em;

    &:hover,
    &.selected {
      color: $accentColor;
    }
  }
}
</style>
