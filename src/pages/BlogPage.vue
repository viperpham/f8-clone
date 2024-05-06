<template>
  <DefaultLayout>
    <BlogLayout />
  </DefaultLayout>
</template>

<script>
  import DefaultLayout from '../layouts/DefaultLayout.vue';
  import BlogLayout from '../layouts/BlogLayout.vue';
  export default {
    components: {
      DefaultLayout,
      BlogLayout,
    },
    setup() {
      return {};
    },
  };
</script>

<style lang="scss" scoped></style>
