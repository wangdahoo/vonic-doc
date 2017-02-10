## 缩放布局

> 总有设计师拿着5，6像素大小的字跑来跟我说小而美。

##### 组件：Vonic.Scalable

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/scalable" frameborder="0"></iframe>
</div>

##### 用法：

```html
<template>
  <div class="padding">
    <!-- 设置宽为父容器宽度，高为100px -->
    <scalable width="100%" height="100" style="background-color: #FFF;">
      <p>
        Font Size = 16px (相当于8px)
      </p>
    </scalable>
  </div>
</template>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| scale | 缩小比例 | Number | 否 | 2 |
| width | 容器宽度 | String | 否 | 100% |
| height | 容器高度 | String | 否 | 100% |
