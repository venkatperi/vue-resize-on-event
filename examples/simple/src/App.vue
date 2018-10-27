<template>
  <div>
    <textarea
      v-model="text"
      class="input2"
      v-resize-on-input> </textarea>
  </div>
</template>


<script lang="ts">
  import { Component } from 'av-ts'
  import Vue from "vue";
  import VueResizeOnEvent from '../../../src/index'

  @Component({
    name: 'App',
    directives: {
      ...VueResizeOnEvent('input'),
    },
  })
  class App extends Vue {
    text = ''
  }

  export default {
    name
  }
</script>

<style lang="scss" scoped>
  .input2 {
    width: 600px;
    resize: none;
  }
</style>

