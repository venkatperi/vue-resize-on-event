# vue-resize-on-event

[![npm](https://img.shields.io/npm/v/vue-resize-on-event.svg) ![npm](https://img.shields.io/npm/dm/vue-resize-on-event.svg)](https://www.npmjs.com/package/vue-resize)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

VueJS [directive](https://vuejs.org/v2/guide/custom-directive.html) to resize a component when a given event fires.

# Installation

```
npm install --save vue-resize-on-event
```

# Example

Include the module for the [`input`](https://developer.mozilla.org/en-US/docs/Web/Events/input) event to register the custom directive `v-resize-on-input`:

```javascript
import Vue from 'vue'
import VueResizeOnEvent from 'vue-resize-on-event'

export default {
   mixins: [
     VueResizeOnEvent( 'input' ), //registers directive v-resize-on-input
   ],

   data() {
     return {
       text: '',
     }
   },
 }
```


## Usage

Add attribute `v-resize-on-input` to a `textarea` element to have it resize automatically when its value is changed interactively.

```html
<template>
  <div>
    <textarea
      v-model="text"
      v-resize-on-input>
    </textarea>
  </div>
</template>
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
