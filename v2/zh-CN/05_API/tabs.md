## 选项卡

##### 组件：Vonic.Tabs

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/tabs" frameborder="0"></iframe>
  <!--<iframe class="demo-ios" src="http://127.0.0.1:8080/#/tabs" frameborder="0"></iframe>-->
</div>

##### 用法：

```html
<template>
  <div class="page has-navbar" v-nav="{title: '选项卡'}">
    <div class="page-content">
      <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      tabs: [
        "tab 1",
        "tab 2",
        "tab 3"
      ],
      tabIndex: 0
    },
    methods: {
      onTabClick(index) {
        console.log(index)
        this.tabIndex = index
      }
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| position | 位置，top/bottom | String | 否 | top |
| bgColor | 背景色 | String | 否 | light |
| tabColor | 前景色 | String | 否 | positive |
| tabItems | 选项列表 | Array | 是 | 无 |
| activeIndex | 激活选项索引 | Number | 是 | 无 |
| onTabChanged | 选项卡点击回调 | Function | 否 | 无 |

> bgColor、tabColor 值均以 vonic 情景色表示。
