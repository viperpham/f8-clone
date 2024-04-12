<template>
  <div
    class="side-bar-nav fixed flex items-center flex-col h-screen bg-gray-100 z-50"
  >
    <div class="p-4 text-black">
      <div
        class="flex relative items-center justify-center bg-blue-600 border border-blue-600 rounded-full text-white cursor-pointer h-11 w-11 my-5 mx-auto mt-2 select-none hover:bg-blue-700"
        @click="toggle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 transform hover:scale-150 transition-all duration-200"
          :class="{ 'rotate-45': isOpen }"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <div
          class="absolute ml-10 mt-10 text-black inset-0 z-50 transform transition-all duration-500"
          :class="{
            'translate-y-0': isOpen,
            '-translate-y-4': !isOpen,
            'opacity-0': !isOpen,
          }"
        >
          <ul
            class="w-44 h-auto bg-white shadow-lg rounded-xl hover:bg-gray-200"
          >
            <li class="">
              <router-link
                to="/write-blog"
                class="flex justify-center items-center content-center gap-2 p-2 py-4 pr-14"
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                <span class="text-sm">Viết blog</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <ul
        v-for="(item, index) in navLink"
        :key="index"
        class="bg-slate-100 w-[72px] h-[72px] my-2 rounded-2xl flex items-center justify-center"
      >
        <router-link
          :to="item.path"
          :class="{ 'bg-gray-200 rounded-2xl': item.path === '/' }"
        >
          <li
            class="py-4 text-xs font-medium flex flex-col items-center justify-center rounded-2xl w-[72px] h-[72px] cursor-pointer hover:bg-zinc-200 transition-all duration-200"
          >
            <svg
              :xmlns="item.icon.xmlns"
              :fill="item.icon.fill"
              :viewBox="item.icon.viewBox"
              :stroke="item.icon.stroke"
              :stroke-width="item.icon.strokeWidth"
              :class="item.icon.class"
            >
              <path
                v-for="(path, key) in item.icon.path"
                :key="key"
                :stroke-linecap="path['stroke-linecap']"
                :stroke-linejoin="path['stroke-linejoin']"
                :d="path.d"
              ></path>
            </svg>
            <a>{{ item.title }}</a>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import { icons } from '../../constants/navLink.js';
  import { useRoute, useRouter } from 'vue-router';

  export default {
    data() {
      return {
        isOpen: false,
        navLink: [
          {
            title: 'Home',
            icon: icons.home,
            path: '/',
          },
          {
            title: 'Lộ Trình',
            icon: icons.road,
            path: '/road',
          },
          {
            title: 'Bài viết',
            icon: icons.blog,
            path: '/blog',
          },
        ],
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      },
      stopPropagation(event) {
        event.stopPropagation();
      },
    },
  };
</script>

<style scoped>
  .side-bar-nav {
    width: 90px;
  }
</style>
