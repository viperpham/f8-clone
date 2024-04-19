<template>
  <div class="posts">
    <h2>Bài viết nổi bật</h2>
    <div class="flex flex-wrap">
      <section
        class="w-[420px] flex"
        v-for="item in featuredArticle"
        :key="item.id"
      >
        <section class="relative posts_pro_item mr-6">
          <a
            class="posts_link"
            href=""
          >
            <button class="posts-button">Xem bài viết</button>
            <img
              class="posts-img after:bg-slate-500"
              :src="item.image"
              alt="HTML CSS Pro"
            />
          </a>
          <h3 class="font-medium my-3 single-line">{{ item.title }}</h3>
          <div class="flex items-center mb-5">
            <div class="flex">
              <a :href="item.author.profile_link">
                <div
                  class="avatar relative"
                  :class="{
                    fallback_avatar: item.author.profile_link === '/@son-dang',
                  }"
                >
                  <img
                    :src="item.author.avatar"
                    :alt="item.author.name"
                  />
                  <!-- Thêm biểu tượng crown nếu có profile_link là '/@s0n-dang' -->
                  <img
                    v-if="item.author.profile_link === '/@son-dang'"
                    src="https://fullstack.edu.vn/static/media/crown.8edf462029b3c37a7f673303d8d3bedc.svg"
                    alt="Crown Icon"
                    class="avatar_crown absolute w-1 h-1 top-0 right-0 transform translate-x-3/4 -translate-y-1/3"
                  />
                </div>
              </a>
              <a
                href=""
                class="flex items-center"
              >
                <h3 class="font-semibold text-base">{{ item.author.name }}</h3>
                <span class="mx-4">·</span>

                <p class="text-sm text-slate-500">{{ item.reading_time }}</p>
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
  import { featuredArticle } from '../Dummy/FeaturedArticle';

  export default {
    setup() {
      return {
        featuredArticle,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .fallback_avatar {
    align-items: center;
    background: linear-gradient(180deg, #ffd900, #b45264 93.68%);
    display: flex;
    justify-content: center;
    padding: 2px;
    position: relative;
    border-radius: 50%;
    margin-right: 10px;
    img {
      border-radius: 50%;
      height: 20px;
      object-fit: cover;
      width: 20px;
    }
    .avatar_crown {
      width: 9px;
      height: 9px;
    }
  }
  .avatar {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 2px;
    position: relative;
    border-radius: 50%;
    margin-right: 10px;
    img {
      border-radius: 50%;
      height: 20px;
      object-fit: cover;
      width: 20px;
    }
  }
  .posts {
    margin: 70px 0px 0px 0px;
    padding: 0px 44px 0px 40px;
    h2 {
      color: #242424;
      font-size: 1.5rem;
      font-weight: 900;
      margin: 16px 0px 20px 0px;
    }
    .posts_pro_item {
      object-fit: cover;
      overflow: hidden;
      width: 387px;
    }
  }
  .posts_pro_item .posts-img {
    border-radius: 20px;
    display: block;
    object-fit: cover;
    overflow: hidden;
    width: 387px;
    height: 200px;
  }
  .posts-icon {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    left: 12px;
    padding: 5px;
    pointer-events: none;
    position: absolute;
    top: 20px;
    width: 26px;
  }
  .posts-button {
    background-color: #1473e6;
    border-radius: 999px !important;
    display: inline-block;
    font-size: 1rem;
    font-weight: 600;
    outline: none;
    padding: 9px 16px;
    text-align: center;

    position: absolute;
    user-select: none;
    white-space: nowrap;
    z-index: 1;
    left: 55%;
    transform: translateX(-60%);
    opacity: 0;
    bottom: 30%;
    transition: all 0.3s ease 0s, bottom 0.3s ease 0s;
    background-color: rgb(255, 255, 255);
  }

  .posts_pro_item:hover .posts-button {
    opacity: 1;
    visibility: visible;
    bottom: 40%;
    transition: all 0.3s ease 0s, bottom 0.3s ease 0s;
  }
  .posts_link {
    position: relative;
    display: inline-block;
  }

  .posts_link::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    transition: background-color 0.3s ease;
    z-index: 0;
    border-radius: 16px;
  }

  .posts_link:hover::after {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .labelposts {
    background-color: #1473e6;
    border-radius: 4px;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 3px 6px;
    position: relative;
    right: -8px;
    text-transform: uppercase;
    top: -6px;
  }
  .single-line {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
