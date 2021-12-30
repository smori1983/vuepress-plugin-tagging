<template>
  <ul class="tag-pages">
    <li
      v-for="page in pages"
      class="tag-page"
    >
      <page-link v-bind:page="page"></page-link>
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
    pages: Array,
  },
};
</script>
