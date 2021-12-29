<template>
  <div>
    <div class="tag-list">
      <span
        v-for="tag in tagList"
        :class="{ selected: isSelectedTag(tag.name) }"
        @click="selectTag(tag.name)"
      >{{ tag.name }}</span>
    </div>
    <ul class="tag-pages" v-if="currentTagName">
      <li v-for="page in currentPages">
        <a :href="page.regularPath">
          <span class="tag-page-title">{{ page.title }}</span>
        </a>
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
      currentTagName: null,
      currentPages: [],
    };
  },

  mounted() {
    this.tagList = tagList;
  },

  methods: {
    isSelectedTag(tagName) {
      return this.currentTagName === tagName;
    },

    selectTag(tagName) {
      this.currentTagName = tagName;

      for (let i = 0, len = this.tagList.length; i < len; i++) {
        if (this.tagList[i].name === tagName) {
          this.currentPages = this.tagList[i].pages;
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
    line-height: 1.2em;

    &:hover,
    &.selected {
      color: $accentColor;
    }
  }
}
</style>
