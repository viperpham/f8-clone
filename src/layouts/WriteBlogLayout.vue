<template>
  <section class="w-full h-full px-8">
    <div>
      <div
        spellcheck="false"
        contenteditable="true"
        class="ContentEditable NewPost_title w-full h-[80px] text-slate-300 p-5 rounded-xl my-5"
      ></div>
      <div class="max-w-[1790px] w-screen">
        <MdEditor v-model="text" />
      </div>
    </div>
  </section>
</template>

<script>
  import { ref } from 'vue';
  import { MdEditor } from 'md-editor-v3';
  import 'md-editor-v3/lib/style.css';

  export default {
    components: {
      MdEditor,
    },
    setup() {
      const text = ref('Nội dung viết ở đây...');

      return {
        text,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .ContentEditable::before {
    content: 'Tiêu đề';
    color: #b3b3b1;
    pointer-events: none;
  }
  .NewPost_title {
    border: none;
    font-size: 2.2rem;
    font-weight: 500;
    min-height: 48px;
    width: 100%;
    outline: none;
  }
</style>
