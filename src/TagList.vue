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
export default {
  data() {
    return {
      tags: {},
      tagList: [],
    };
  },

  mounted() {
    this.$site.pages.forEach((page) => {
      const tags = page.frontmatter.tags || [];
      tags.forEach((tag) => {
        if (!this.tags[tag]) {
          this.tags[tag] = [];
        }
        this.tags[tag].push(page);
      });
    });

    for (const tag in this.tags) {
      this.tagList.push({
        name: tag,
        pages: this.tags[tag],
      });
    }
  }
};
</script>

<style lang="scoped">
</style>
