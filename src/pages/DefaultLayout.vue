<template>
  <div class="wrapper">
    <Header />
    <div class="container">
      <SideBar />
      <div class="content">
        <HomeWrapper />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header/Header.vue';
  import SideBar from '../components/SideBar/SideBarNav.vue';
  import Content from '../components/Content/SlideContent.vue';
  import HomeWrapper from '../components/Home/HomeWrapper.vue';

  export default {
    components: {
      Header,
      SideBar,

      HomeWrapper,
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
    max-width: 100%;
  }

  .content {
    flex: 1;
    padding: 0px 0px 0px 90px;
  }
</style>
