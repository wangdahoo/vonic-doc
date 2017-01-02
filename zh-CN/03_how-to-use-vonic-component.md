# 如何使用 Vonic 组件

在 Vonic 中，一部分组件需要在创建 Vue 实例时，在 components 属性中进行引入才能使用；另一部分则在 vonic.js 加载后自动注册为全局服务，可直接调用。

下面以 MdButton 和 $toast 两类组件为例进行说明：

```html
<template>
  <div class="page">
    <div class="page-content">
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
  import {MdButton} from 'vonic'
  export default {
    components: {
      MdButton
    },
    methods: {
      onClick() {
        $toast.show("button clicked.")
      }
    }
  }
</script>
```

> [查看在线范例](https://jsfiddle.net/wangdahoo/wee3kwnk/)
