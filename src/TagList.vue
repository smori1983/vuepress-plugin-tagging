<template>
  <div>
    <ul>
      <li v-for="tag in tagList">
        <p>{{ tag.name }}</p>
        <ul>
          <li v-for="page in tag.pages">
            <a :href="page.regularPath">
              <span>{{ page.title }}</span>
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
        this.tags[tag].push({
          regularPath: page.regularPath,
          title: page.title,
        });
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
