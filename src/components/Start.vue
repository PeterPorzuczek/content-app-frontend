<template>
  <div>
    <div v-if="!showWorkspace" class="intro">
      <h1>What would you like to write about?</h1>
      <SearchInput />
    </div>
    <Workspace v-if="showWorkspace" />
  </div>
</template>

<script>
import SearchInput from './SearchInput';
import Workspace from './Workspace';

export default {
  name: 'Start',
  components: {
    SearchInput,
    Workspace,
  },
  computed: {
    showWorkspace() {
      return this.$store.getters['searchresults/GET_RESULTS_COUNT'];
    },
  },
};
</script>

<style>
.intro {
  padding-top: 20px;
}
</style>
