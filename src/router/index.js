import { createRouter, createWebHistory } from 'vue-router';
// import Register from '../components/Auth/Register.vue';
// import Login from '../components/Auth/Login.vue';
// import PostInformation from '../Layouts/PostInformation.vue';
import Home from '../pages/DefaultLayout.vue';

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

export default router;
