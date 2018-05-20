<template>
  <div>
    <div class="editor-wrapper">
      <vue-editor class="editor" :placeholder="placeholder" v-model="content"></vue-editor>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
  name: 'Editor',
  components: {
    VueEditor,
  },
  data() {
    return {
      content: '',
      placeholder: 'Hey, we don\'t want to interrupt your flow so start writting your story :)',
    };
  },
};
</script>

<style>
.editor-wrapper {
  /* display: flex; */
  /* position: relative; */
  /* min-height: 500px; */
  /* height: 450px; */
  border: none;
  margin: 30px;
  margin-top: 0px;
    height: calc(100vh - 162px);
  /* height: calc(100vh - 62px); */
}
.quill-container {
  border:none !important;
  /* height: calc(100vh - 62px); */
}
.ql-toolbar.ql-snow {
  border:none !important;
  /* max-height: 80px; */
  /* overflow-y: auto; */
}
.ql-toolbar.ql-snow+.ql-container.ql-snow {
  border-top: 0 !important;
  border: none  !important;
}
.ql-editor {
  height: calc(100vh - 162px) !important;
  max-height: calc(100vh - 162px) !important;
  overflow-y: auto;
}
.editor {
  height: calc(100vh - 62px);
  /* min-height: 500px; */
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .09);
  border-radius: 8px;
  border: none !important;
  overflow: hidden;
  /* bottom: 0px; */
  background-color: white;
}
</style>
