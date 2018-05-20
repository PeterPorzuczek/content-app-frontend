<template>
  <div class="search-results">
    <div
      v-if="searchResults.length > 0"
      v-for="(item, key) in searchResults[0]"
      :key="key">
      <search-result :url="item.href" :title="item.title" :id="key.toString()" />
    </div>
  </div>
</template>

<script>
import SearchResult from './SearchResult';

export default {
  name: 'SearchResults',
  components: { SearchResult },
  computed: {
    searchResults() {
      return this.$store.getters['searchresults/GET_RESULTS'];
    },
  },
};
</script>

<style>
.search-results {
  transition: all 0.5s ease;
  height: calc(100vh - 62px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
