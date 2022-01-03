<template>
  <div>
    <div class="tag-list">
      <span
        v-for="tag in tagList"
        class="tag-list-item"
        :class="{ selected: isSelectedTag(tag.name) }"
        @click="selectTag(tag.name)"
      >{{ tag.name }}</span>
    </div>
    <page-list
      v-if="currentTag"
      v-bind:pages="currentTag.pages"
    ></page-list>
  </div>
</template>

<script>
import tagList from '@dynamic/vuepress-plugin-tagging/tag-list-i18n';
import PageList from './PageList';

export default {
  components: {
    PageList,
  },

  data() {
    return {
      tagList: [],
      currentTag: null,
    };
  },

  mounted() {
    this.tagList = tagList[this.$localePath];
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

  .tag-list-item {
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
