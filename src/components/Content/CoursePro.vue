<template>
  <div>
    <div class="course">
      <h2>
        <span>
          Khóa học Pro
          <span class="labelCourse">Mới</span>
        </span>
      </h2>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {
    setup() {
      return {};
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
      margin-right: auto;
    }
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
