<template>
  <section class="slide-show mt-5 justify-between rounded-xl right-1">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :loop="true"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="rounded-xl"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide
        v-for="(item, index) in slide"
        :key="index"
      >
        <div
          :style="{
            backgroundImage: `linear-gradient(to right, ${item.bgFrom}, ${item.bgTo})`,
          }"
          class="flex justify-between h-64 items-center rounded-xl mx-4 md:ml-7"
        >
          <div class="text-white w-[640px] p-10">
            <h1 class="capitalize font-bold text-2xl md:text-3xl mb-3">
              {{ item.title }}
            </h1>
            <p class="text-sm md:text-base mb-3">{{ item.description }}</p>
            <button
              class="text-sm md:text-base border-2 border-white px-4 py-2 rounded-full"
            >
              {{ item.buttonTile }}
            </button>
          </div>
          <div class="hidden md:block">
            <img
              :src="item.thumbnail"
              class="rounded-xl"
              alt=""
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
  import { slide } from '../Dummy/Slide';
  // import Swiper core and required modules
  import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
  } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  export default {
    data() {
      return {
        slide: slide,
      };
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {};
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Autoplay, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>

<style>
  .slide-show {
    height: 270px;

    width: 1708px;
  }

  @media screen and (max-width: 1300px) {
    .slide-show {
      width: 900px;
    }
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    color: #4b4b4b;
    cursor: pointer;
    font-size: 1rem;
    height: 32px;
    line-height: 32px;
    position: absolute;
    text-align: center;
    bottom: 50%;
    width: 32px;
    z-index: 1;
  }

  .swiper-button-next {
    transform: translateX(10px);
  }

  /* Thiết lập kích thước và định dạng cho .swiper-pagination-bullet */
  .swiper-pagination-bullet {
    width: 50px; /* Đổi chiều rộng của bullets */
    height: 10px; /* Đổi chiều cao của bullets */
    border-radius: 10px;
    background-color: #9c9a9a; /* Màu nền mặc định */
    transition: background-color 0.3s ease; /* Hiệu ứng chuyển động màu nền */
  }

  /* Khi hover vào .swiper-pagination-bullet */
  .swiper-pagination-bullet:hover {
    background-color: #888; /* Màu nền khi hover */
  }

  /* Tạo hiệu ứng animation */
  @keyframes bulletAnimation {
    0% {
      /* Điều chỉnh kích thước ban đầu của bullet */
      transform: scaleX(1);
    }
    50% {
      /* Thay đổi kích thước của bullet */
      transform: scaleX(1.5);
    }
    100% {
      /* Điều chỉnh kích thước cuối cùng của bullet */
      transform: scaleX(1);
    }
  }

  /* Áp dụng animation cho .swiper-pagination-bullet khi active */
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    animation: bulletAnimation 0.3s ease; /* Sử dụng animation với tên là bulletAnimation */
  }

  /* Tùy chỉnh margin giữa các bullets */
  .swiper-pagination-bullet {
    margin: 0 5px;
  }

  .swiper-pagination-bullet-active {
    background-color: #777a77;
  }

  /* Tùy chỉnh kích thước của pagination */
  .swiper-pagination {
    font-size: 16px;
    position: static !important;
    transform: translateX(40px);
    text-align: left;
    margin-top: 10px;
  }
</style>
