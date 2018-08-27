<template>
  <div>
    <textarea v-model="text" class="input2"
      v-resize-on-input> </textarea>
  </div>
</template>


<script>
  import VueResizeOnEvent from 'code/VueResizeOnEvent'

  export default {

    mixins: [VueResizeOnEvent( 'input' )],

    data() {
      return {
        text: '',
      }
    },

  }
</script>

<style lang="scss" scoped>
  .input2 {
    width: 600px;
    resize: none;
  }
</style>

