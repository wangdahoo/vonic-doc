# Components and Services

As **Vonic** loaded, most components registered via method `Vue.component` globally, you can use them directly. Besides, some other components serve as a **Service Provider**, such as $toast, $dialog etc.

The following example does make sense, with **MdButton** and **$toast**:

```html
<template>
  <div class="page has-navbar" v-nav="{'title': 'Components and Services'}">
    <div class="page-content padding padding-top">
      <md-button class="button button-assertive button-block">
        just a button
      </md-button>

      <md-button class="button button-balanced button-block" @click="onClick()">
        show toast
      </md-button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      onClick() {
        $toast.show("button clicked.")
      }
    }
  }
</script>
```

> [Online demo here](https://jsfiddle.net/wangdahoo/wee3kwnk/)
