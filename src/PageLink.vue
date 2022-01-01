<template>
  <a :href="page.path">
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
