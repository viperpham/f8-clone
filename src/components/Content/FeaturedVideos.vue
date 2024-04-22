<template>
  <div class="posts">
    <h2>Videos nổi bật</h2>
    <div class="flex flex-wrap">
      <section
        class="w-[410px] flex"
        v-for="item in trending"
        :key="item.id"
      >
        <section>
          <div class="relative posts_pro_item mr-6 mb-[32px]">
            <a
              class="posts_link relative"
              href=""
            >
              <button class="posts-button">Xem video</button>
              <img
                class="posts-img after:bg-slate-500"
                :src="item.image"
                alt="HTML CSS Pro"
              />
              <div
                class="absolute flex items-center justify-between z-50 left-0 bottom-0 p-4 right-0"
              >
                <div
                  class="bg-white w-9 h-9 flex justify-center items-center rounded-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  class="rounded-full border-2 py-[4px] px-3 border-white text-white font-semibold"
                >
                  <span
                    >{{ Math.floor(item.duration / 60) }}:{{
                      item.duration % 60
                    }}</span
                  >
                </div>
              </div>
            </a>
            <h3 class="font-medium my-3 single-line">{{ item.title }}</h3>
            <div class="flex items-center">
              <div class="flex text-sm text-gray-500 -ml-6">
                <div class="flex ml-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path
                      fill-rule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>{{ item.yt_view_count }}</span>
                </div>
                <div class="flex ml-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z"
                    />
                  </svg>
                  <span>{{ item.yt_view_count }}</span>
                </div>
                <div class="flex ml-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>{{ item.yt_like_count }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
  import { trending } from '../Dummy/Trending';

  export default {
    setup() {
      return {
        trending,
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
