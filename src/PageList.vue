<template>
  <ul class="tag-pages">
    <li
      v-for="page in pages"
      class="tag-page"
    >
      <page-link
        v-bind:path="page.path"
        v-bind:title="page.title"
      ></page-link>
    </li>
  </ul>
</template>

<script>
import PageLink from './PageLink';

export default {
  components: {
    PageLink,
  },

  props: {
    pages: {
      type: Array,
      required: true,
    },
  },
};
</script>
