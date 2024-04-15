<template>
  <div
    class="fixed z-50 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
    v-if="isToggleModal"
  >
    <LoginModal />
  </div>
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
  import LoginModal from '../components/Auth/LoginModal.vue';
  import { mapState, mapActions } from 'vuex';

  export default {
    components: {
      Header,
      SideBar,
      LoginModal,
      HomeWrapper,
    },
    setup() {
      return {};
    },
    computed: {
      ...mapState(['isToggleModal']),
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
