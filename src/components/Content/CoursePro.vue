<template>
  <div class="course">
    <div>
      <h2>
        <span>
          Khóa học Pro
          <span class="labelCourse">Mới</span>
        </span>
      </h2>
    </div>
    <div class="flex">
      <section
        class="w-full"
        v-for="item in listCoursePro"
        :key="item.id"
      >
        <section class="relative course_pro_item">
          <a
            class="course_link"
            href=""
          >
            <button class="course-button">Xem khóa học</button>
            <img
              class="course-img"
              :src="item.image"
              alt="HTML CSS Pro"
            />
          </a>
          <h3 class="font-medium my-3">{{ item.title }}</h3>
          <div class="course-icon">
            <img
              src="https://fullstack.edu.vn/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg"
              alt="HTML CSS Pro"
            />
          </div>
          <div class="flex">
            <span class="mr-3 line-through">{{ item.old_price }}</span>
            <span class="text-red-500 font-semibold">{{ item.new_price }}</span>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
  import { listCoursePro } from '../Dummy/CoursesPro';
  export default {
    setup() {
      return {
        listCoursePro,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .course {
    margin: 70px 0px 0px 0px;
    padding: 0px 44px 0px 40px;
    h2 {
      color: #242424;
      font-size: 1.5rem;
      font-weight: 900;
      margin: 16px 0px 20px 0px;
    }
    .course_pro_item {
      object-fit: cover;
      overflow: hidden;
      width: 387px;
    }
  }
  .course_pro_item .course-img {
    border-radius: 20px;
    display: block;
    object-fit: cover;
    overflow: hidden;
    width: 387px;
  }
  .course-icon {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    left: 12px;
    padding: 5px;
    pointer-events: none;
    position: absolute;
    top: 20px;
    width: 26px;
  }
  .course-button {
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

  .course_pro_item:hover .course-button {
    opacity: 1;
    visibility: visible;
    bottom: 40%;
    transition: all 0.3s ease 0s, bottom 0.3s ease 0s;
  }
  .course_link {
    position: relative;
    display: inline-block;
  }

  .course_link::after {
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

  .course_link:hover::after {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .labelCourse {
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
</style>

<!-- absolute w-10 h-10 p-2 top-1 left-3 mt-10 bg-black bg-opacity-30 rounded-lg ointer-events-none -->
