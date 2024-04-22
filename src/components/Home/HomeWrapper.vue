<template>
  <div>
    <SlideShow />
    <CoursePro />
    <CourseFree />
    <FeaturedArticle />
    <FeaturedVideos />
  </div>
</template>

<script>
  import SlideShow from '../Content/SlideContent.vue';
  import CoursePro from '../Content/CoursePro.vue';
  import CourseFree from '../Content/CourseFree.vue';
  import FeaturedArticle from '../Content/FeaturedArticle.vue';
  import FeaturedVideos from '../Content/FeaturedVideos.vue';
  import Footer from '../Footer/Footer.vue';

  export default {
    components: {
      SlideShow,
      CoursePro,
      CourseFree,
      FeaturedArticle,
      FeaturedVideos,
    },
    setup() {
      return {};
    },
  };
</script>

<style lang="scss" scoped></style>
