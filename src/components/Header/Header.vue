<template>
  <header
    class="flex w-full bg-white border-b h-16 items-center justify-center px-7 box-border sticky z-50 top-0"
  >
    <div class="flex justify-between flex-row space-x-4 w-full mx-auto">
      <!-- Logo và tiêu đề -->
      <div class="flex items-center">
        <img
          class="w-9 h-9 rounded-lg shadow-xl object-cover mr-1"
          src="../../assets/img/f8.png"
          alt="F8 - Học lập trình để đi làm"
        />
        <h1 class="text-center text-sm tracking-widest font-bold ml-4">
          Học lập trình để đi làm
        </h1>
      </div>

      <!-- Ô tìm kiếm -->
      <div class="flex w-[420px] h-[40px] pr-4">
        <div
          class="absolute flex items-center justify-center w-[350px] m-auto border-2 border-gray-300 p-1 rounded-full bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            class="ml-2 w-full bg-transparent focus:outline-none"
            type="text"
            placeholder="Tìm kiếm khóa học, bài viết, video, ..."
          />
        </div>
      </div>

      <!-- Đăng nhập và đăng ký -->
      <div class="flex justify-end items-center mr-10">
        <div class="flex gap-4">
          <button class="btn-login">Đăng nhập</button>
          <button
            class="btn-register"
            @click="openLoginModal"
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import LoginMoal from '../Auth/LoginModal.vue';
  import { useStore, mapActions } from 'vuex';
  import { computed } from 'vue';

  export default {
    components: {
      LoginMoal,
    },

    methods: {
      ...mapActions(['openLoginModal']),
    },
    setup() {
      const store = useStore();

      return {};
    },
  };
</script>

<style scoped>
  .btn-register {
    background: linear-gradient(to right bottom, #ff8f26, #ff5117);
    border-radius: 99px;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    padding: 9px 20px;
    transition: opacity 0.25s;
  }

  .btn-register:hover {
    opacity: 0.9;
  }
</style>
