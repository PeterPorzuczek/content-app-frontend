<template>
  <div class="search-result">
    <!-- <vue-frame
      :text="item.title"
      :url="item.href"
      :frame="id"
      :default="true"></vue-frame>

    <iframe
      class="iframe iframe-placeholder"
      sandbox="allow-forms allow-scripts"
      :id="id"
      width="90%" /> -->

    <div v-if="data.html" >
      <div class="result">
        <div class="top">
          <p v-if="hide">{{ title }}</p>
          <button class="show-hide" @click="hide=!hide">
            <div v-if="!hide">Hide</div>
            <div v-if="hide">Show</div>
          </button>
          <a v-if="!hide" target="_blank" :href="url" class="source">Go to source</a>
        </div>
        <div>
          <div v-if="!hide">
            <div class="iframe-wrapper">
            <iframe
              class="iframe iframe-placeholder"
              sandbox="allow-forms allow-scripts"
              :srcdoc='`${textStyleBefore}<div style="${textStyle}">${data.html}</div>`'
              :id="id"
              width="90%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueFrame from 'vue-frame';
import axios from 'axios';

export default {
  name: 'SearchResult',
  // components: { VueFrame },
  data() {
    return {
      prefix: 'https://rster.herokuapp.com/read/?url=',
      data: {},
      hide: false,
      textStyleBefore: '<style type="text/css"> a { text-decoration: none; color: #5D5D5D } </style>',
      textStyle: 'line-height: 1.78; background-color: white; font-family: Avenir, Helvetica, Arial, sans-serif; text-align:justify;',
    };
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
  async mounted() {
    const data = await axios.get(this.prefix + this.url);
    this.data = data.data.words > 0 ? data.data : {};
  },
};
</script>

<style>
.iframe-wrapper {
  opacity: .62;
}
.iframe-wrapper:hover {
  opacity: 1;
}
.iframe {
  display: inline-block;
  border-radius: 20px;
  /* border: 1px solid #c3c3c3; */
  height: 400px;
  transition: box-shadow 0.2s ease-in-out;
  border: none;
  background-color: white !important;
  box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .11);
}
.iframe:hover {
  border: 1px solid #FCFFB5;
}
.iframe-placeholder {
   background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 100% 100%" fill="#000000" width="100%" height="100%" viewBox="0 0 100% 100%"><text fill="%23C9C9C9" x="50%" y="50%" font-family="\'Lucida Grande\', sans-serif" font-size="24" text-anchor="middle">Loading</text></svg>') 0px 0px no-repeat;
}
.result {
    margin-bottom: 30px;
}
.show-hide {
  float: right;
  outline: 0;
  border: none;
  background: transparent;
}
.source {
  float: right;
  outline: 0;
  border: none;
  background: transparent;
  text-decoration: none;
  color: black;
  font-size: 12px;
}
.top {
    width: 90%;
    display: inline-block;
    padding: auto;
    margin: auto;
    padding-bottom: 5px;
}
</style>
