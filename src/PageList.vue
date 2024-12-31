<template>
  <ul class="tag-pages">
    <li
      v-for="page in pages"
      class="tag-page"
    >
      <router-link :to="page.path">{{ page.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pageKeys: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      pages: [],
    };
  },

  mounted() {
    this.updatePages();
  },

  watch: {
    pageKeys() {
      this.updatePages();
    }
  },

  methods: {
    updatePages() {
      this.pages = [];
      this.pageKeys.forEach((key) => {
        const page = this.$site.pages.find(page => page.key === key);

        if (page) {
          this.pages.push(page);
        }
      });
    },
  },
};
</script>
