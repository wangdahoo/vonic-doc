## iOS 风格选项卡

##### 组件：Vonic.ButtonBar

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/buttonbar" frameborder="0"></iframe>
</div>

##### 用法：

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'iOS 风格选项卡'}">
    <div class="page-content padding-top">
      <div class="padding">
        商品分类:
      </div>
      <div class="padding light-bg">
        <button-bar theme="assertive" :tab-items="promotions" :tab-index="promotionIndex"
          :on-tab-click="index => promotionIndex = index"></button-bar>
      </div>
      <div class="item thin-border">
        选中: {{ promotions[promotionIndex] }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        promotions: ["往期热卖", "抢购进行中"],
        promotionIndex: 0
      }
    }
  }
</script>

```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| tabItems | 选项列表 | Array | 是 | 无 |
| tabIndex | 当前选项索引 | Number | 是 | 无 |
| theme | 主题 | String | 否 | positive |
| onTabClick | 选项点击回调 | Function | 否 | 无 |
