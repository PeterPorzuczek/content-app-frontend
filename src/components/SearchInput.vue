<template>
  <div>
    <div class="search-box">
      <input class="query" placeholder="Search" v-model="message" @keyup.enter="search"/>
      <select class="lang" v-model="lang">
        <option v-for="(option, key) in options" :key="key" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      message: '',
      lang: 'pl',
      options: [
        { text: 'PL', value: 'pl' },
        { text: 'EN', value: 'en' },
        { text: 'DE', value: 'de' },
      ],
    };
  },
  methods: {
    search() {
      this.$store.dispatch('searchresults/LOAD_RESULTS', { q: this.message, lang: this.lang });
    },
  },
};
</script>

<style>
.search-box {
  display: block;
  width: 50%;
  height: 45px;
  margin: 100px auto 10px auto;
  border: none;
  outline: 0;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #FFFFFF;
  padding-left: 20px;
  font-size: 13px;
}
.query {
  display: block;
  outline: 0;
  width: 80%;
  float: left;
  height: 42px;
  border: none;
  font-size: 13px;
}
.lang {
  display: block;
  outline: 0;
  width: 10%;
  float: left;
  height: 42px;
  border: none;
  font-size: 13px;
}

</style>
