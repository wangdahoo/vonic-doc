# 组件与服务

**Vonic** 加载完毕后，大部分组件都已通过`Vue.component`方法注册为全局组件，可以直接使用；除此以外，还有小部分组件以服务提供者的形式提供服务，如：**$toast**、**$dialog** 等。

下面以 MdButton、$toast 为例进行说明：

```html
<template>
  <div class="page has-navbar" v-nav="{'title': 'Component and Service'}">
    <div class="page-content padding padding-top">
      <md-button class="button button-assertive button-block">
        just a button
      </md-button>

      <md-button class="button button-balanced button-block" @click.native="onClick()">
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

运行效果如下：

<style>
  .device-ios { width: 467px; height: 800px; background: url(img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/componentAndService" frameborder="0"></iframe>
</div>
