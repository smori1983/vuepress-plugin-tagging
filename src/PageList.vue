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
    pages: {
      type: Array,
      required: true,
    },
  },
};
</script>
