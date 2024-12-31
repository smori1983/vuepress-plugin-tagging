<template>
  <router-link :to="path">{{ title }}</router-link>
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
