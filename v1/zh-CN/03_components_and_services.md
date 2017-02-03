# 组件与服务

**Vonic** 加载完毕后，大部分组件都已通过`Vue.component`方法注册为全局组件，可以直接使用；除此以外，还有小部分组件以服务提供者的形式提供服务，如：**$toast**、**$dialog** 等。

下面以 MdButton、$toast 为例进行说明：

```html
<template>
  <div class="page has-navbar" v-nav="{'title': '组件和服务'}">
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

> [查看在线范例](https://jsfiddle.net/wangdahoo/wee3kwnk/)
