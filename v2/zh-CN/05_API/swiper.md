## 轮播

##### 组件：Vonic.Swiper、Vonic.SwiperItem

##### 示例：

<!-- 

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/swiper" frameborder="0"></iframe>
</div>

-->

请用手机访问 [在线演示 https://wangdahoo.github.io/vonic-doc-examples/#/swiper](https://wangdahoo.github.io/vonic-doc-examples/#/swiper)

##### 用法：

```html
<template>
  <div>
    <swiper direction="vertical" ref="swiper">
      <swiper-item>
        <h1>Item 1</h1>
      </swiper-item>

      <swiper-item>
        <h1>Item 2</h1>
      </swiper-item>

      <swiper-item>
        <h1>Item 3</h1>
      </swiper-item>
    </swiper>
  </div>
</template>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| direction | vertical/horizontal | String | 否 | vertical |
| width | 宽度 | String | 否 | 100% |
| height | 高度 | String | 否 | 100% |
| pagerColor | 导航颜色 | String | 否 | #333 |
| pagerBgColor | 导航颜色 | String | 否 | #333 透明度40% |

##### 方法：

`Void go(index :Number) `

跳转到某一页，如：

```js
/* 轮播到第二页 */
this.$refs.swiper.go(1)
```

`Void next() `

跳转到下一页

`Void prev() `

跳转到上一页

