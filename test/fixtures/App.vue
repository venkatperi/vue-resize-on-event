<template>
  <div>
    <textarea v-model="text" ref="target" class="input2"
      v-resize-on-input> </textarea>
  </div>
</template>


<!--suppress JSUnusedGlobalSymbols -->
<script>
  import VueResizeOnEvent from '../../src/VueResizeOnEvent'

  export default {
    name: 'App',
    mixins: [
      VueResizeOnEvent( 'input' ),
      VueResizeOnEvent( 'value' ),
    ],

    data() {
      return {
        text: '',
      }
    },
  }
</script>

<style lang="scss" scoped>
  .input2 {
    width: 300px;
  }
</style>

