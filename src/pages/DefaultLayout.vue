<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <SideBar />
      <div class="content">
        <Content />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header/Header.vue';
  import SideBar from '../components/SideBar/SideBarNav.vue';
  import Content from '../components/Content/SlideContent.vue';

  export default {
    components: {
      Header,
      SideBar,
      Content,
    },
    setup() {
      return {};
    },
  };
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .container {
    display: flex;
    flex: 1;
    max-width: 100%;
  }

  .content {
    flex: 1;
    align-items: center;
    justify-items: center;
  }
</style>
