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

      this.tagList.forEach((tag) => {
        if (tag.name === tagName) {
          this.currentPages = tag.pages;
        }
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.tag-list {
  padding: 1rem;
  border: 1px solid $borderColor;

  span {
    cursor: pointer;
    margin-right: 1 rem;

    &.selected {
      color: $accentColor;
    }
  }
}
</style>
