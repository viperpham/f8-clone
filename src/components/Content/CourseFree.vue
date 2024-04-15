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
    <div class="grid grid-cols-4">
      <section
        v-for="item in listCourseFree"
        :key="item.id"
      >
        <section class="relative course_pro_item">
          <a
            class="course_link"
            href=""
          >
            <button class="course-button">Xem khóa học</button>
            <img
              class="course-img after:bg-slate-500"
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
          <div class="flex items-center mb-5">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="users"
              class="svg-inline--fa fa-users w-4 h-4 mr-2 text-gray-500"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"
              ></path>
            </svg>
            <span class="text-base">{{ item.students_count }}</span>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
  import { listCourseFree } from '../Dummy/CoursesFree';

  export default {
    setup() {
      console.log(listCourseFree);
      return {
        listCourseFree,
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
    left: 50%;
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
