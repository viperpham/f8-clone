<template>
  <div
    class="bg-opacity-50 font-sans"
    v-if="isToggleModal"
  >
    <div class="flex justify-center items-center h-screen w-screen">
      <div
        class="bg-white relative flex flex-col justify-center items-center rounded-2xl px-6 shadow-lg w-[560px] h-[660px]"
      >
        <div
          class="absolute flex items-center justify-center left-0 top-0 mt-5 ml-5 w-8 h-8 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div
          class="absolute flex items-center justify-center right-0 top-0 mt-5 mr-5 w-8 h-8 rounded-full bg-gray-100"
          @click="closeModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke-height="2"
            stroke="currentColor"
            class="w-5 h-5 text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-200"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <img
          class="w-10 h-10 rounded-lg object-cover mx-auto flex"
          src="../../assets/img/f8.png"
          alt="F8 - Học Lập Trình Để Đi Làm"
        />
        <h1 class="text-center mt-2 text-xl tracking-widest font-bold mb-5">
          Đăng ký tài khoản F8
        </h1>
        <p class="text-red-500 text-sm text-center">
          Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người
          <br />
          sử dụng chung có thể sẽ bị khóa.
        </p>
        <div class="mt-5 flex flex-col items-center">
          <div class="link-login">
            <p>Đăng nhập với Email/ Số điện thoại</p>
          </div>
          <div class="link-login">
            <p>Đăng nhập với Google</p>
          </div>
          <div class="link-login">
            <p>Đăng nhập với FaceBook</p>
          </div>
          <div class="link-login">
            <p>Đăng nhập với Github</p>
          </div>

          <p class="mt-6">
            Bạn đã có tài khoản?

            <a
              href="#"
              class="text-red-500 font-medium"
            >
              Đăng nhập
            </a>
          </p>
        </div>
        <div class="text-xs">
          <p class="text-center min-w-96 mt-4 mx-10 p-4">
            Việc bạn sử dụng trang web này đồng nghĩa bạn đồng ý với
            <a
              href="#"
              class="underline decoration-1"
              >Điều khoản sử dụng</a
            >
            của chúng tôi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { useStore } from 'vuex';
  import { mapState } from 'vuex';
  import { ref } from 'vue';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['isToggleModal']),
    },
    methods: {
      ...mapActions(['closeLoginModal']),
      closeModal() {
        // Đóng modal thông qua Vuex action
        this.closeLoginModal();
        console.log('Close modal');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .link-login {
    border: 2px solid #e0e0e0;
    border-radius: 30px;
    padding: 20px 0;
    text-align: center;
    margin-top: 14px;
    width: 320px;
    height: 44px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
  }
</style>
