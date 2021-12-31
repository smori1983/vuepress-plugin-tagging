<template>
  <a :href="page.regularPath">
    <span class="tag-page-title">{{ page.title }}</span>
  </a>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
};
</script>
