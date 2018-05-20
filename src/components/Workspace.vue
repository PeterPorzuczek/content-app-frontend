<template>
  <div>
    <div class="heading">

    </div>
    <div class="components-container" >
      <split-pane
        class="splitpane"
        :min-percent='30'
        :max-percent='80'
        :default-percent='50'
        split="vertical">
        <template slot="paneL" class="a">
          <editor />
        </template>
        <template slot="paneR">
          <search-results />
        </template>
      </split-pane>
    </div>
  </div>
</template>

<script>
import SplitPane from 'vue-splitpane';
import SearchResults from './SearchResults';
import Editor from './Editor';

export default {
  name: 'Workspace',
  components: {
    SplitPane,
    SearchResults,
    Editor,
  },
};
</script>

<style>
.splitpane {
  width: 100%;
}
.heading {
  position: relative;
  height: 8px;
  padding-bottom: 20px;
}
.components-container {
  position: relative;
  height: calc(100vh - 62px);
  /* bottom: 0px; */
}
.splitter-pane-resizer.vertical {
  width: 30px;
  background-color: #0000004d;
  /* box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 1); */
}
</style>
