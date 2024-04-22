<template>
  <div class="wrapper">
    <div
      class="fixed z-50 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
      v-if="isToggleModal"
    >
      <LoginModal />
    </div>
    <Header class="z-40" />
    <div class="container">
      <SideBar />
      <div class="content">
        <HomeWrapper />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
  import Header from '../components/Header/Header.vue';
  import SideBar from '../components/SideBar/SideBarNav.vue';
  import Footer from '../components/Footer/Footer.vue';
  import HomeWrapper from '../components/Home/HomeWrapper.vue';
  import LoginModal from '../components/Auth/LoginModal.vue';
  import { mapState, mapActions } from 'vuex';

  export default {
    components: {
      Header,
      SideBar,
      LoginModal,
      HomeWrapper,
      Footer,
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
  }

  .content {
    flex: 1;
    padding: 0px 44px 0px 44px;
  }
</style>
