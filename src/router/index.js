import { createRouter, createWebHistory } from 'vue-router';
// import Register from '../components/Auth/Register.vue';
// import Login from '../components/Auth/Login.vue';
// import PostInformation from '../Layouts/PostInformation.vue';
import Home from '../pages/DefaultPage.vue';
import RoadLayout from '../pages/RoadPage.vue';
import WriteBlogLayout from '../pages/WriteBlogPage.vue';
import Blog from '../pages/BlogPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login', // Điều hướng mặc định đến trang đăng nhập
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: Register,
    // // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login,
    // },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/road',
      name: 'road',
      component: RoadLayout,
    },
    {
      path: '/write-blog',
      name: 'write-blog',
      component: WriteBlogLayout,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },

    // {
    //   path: '/authors',
    //   name: 'authors',
    //   component: () => import('../Layouts/AuthorsInfomation.vue'),
    // },
    // {
    //   path: '/postCard/:id',
    //   name: 'postInformation',
    //   component: PostInformation,
    //   props: true,
    // },
  ],
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); // Cuộn trang lên đầu mỗi khi chuyển trang
  next();
});

export default router;
