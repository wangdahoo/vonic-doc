## 宫格布局

##### 组件：Vonic.Cells

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/cells" frameborder="0"></iframe>
  <!--<iframe class="demo-ios" src="http://127.0.0.1:8080/#/cells" frameborder="0"></iframe>-->
</div>

##### 用法：

```html
<template>
  <div>
    <cells :items="entrances" :on-cell-click="onCellClick" row="2"></cells>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        entrances: [
          '<div class="entrance assertive"><i class="icon ion-ios-flame"></i><br><span>热门</span></div>',
          '<div class="entrance energized"><i class="icon ion-ios-star"></i><br><span>好评</span></div>',
          '<div class="entrance balanced"><i class="icon ion-ios-location"></i><br><span>附近</span></div>',
          '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>'
        ]
      }
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| row | 行数 | Number | 否 | 3 |
| col | 列数 |  Number | 否 | 3 |
| items | 列表项 |  Array | 是 | 无 |
| onCellClick | 宫格单元点击回调 |  Function | 否 | 无 |
| outerBorder | 是否显示宫格容器外边框 | Boolean, String | 否 | true |
