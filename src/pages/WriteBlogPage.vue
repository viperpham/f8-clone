<template>
  <div class="">
    <Header
      class="z-50"
      :isHome="false"
    />
    <div class="container">
      <div class="content">
        <WriteBlogLayout />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
  import Header from '../components/Header/Header.vue';
  import Footer from '../components/Footer/Footer.vue';
  import WriteBlogLayout from '../layouts/WriteBlogLayout.vue';

  export default {
    components: {
      Header,
      Footer,
      WriteBlogLayout,
    },
    setup() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
    margin-bottom: 50px;
  }
</style>
