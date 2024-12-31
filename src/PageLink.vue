<template>
  <a :href="path">
    <span class="tag-page-title">{{ title }}</span>
  </a>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
