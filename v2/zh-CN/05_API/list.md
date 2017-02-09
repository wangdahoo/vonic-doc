## 列表布局

##### 组件：Vonic.List、Vonic.Item、Vonic.HairlineItem

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/list" frameborder="0"></iframe>
  <!--<iframe class="demo-ios" src="http://127.0.0.1:8080/#/list" frameborder="0"></iframe>-->
</div>

##### 用法：

Vonic 在 ionic 丰富的列表类样式基础上，做了完备的1px方案。

你可以通过引入组件的方式来使用它们，如：

```html
<template>
  <div>
    <list>
      <item class="item-icon-right">
        文字
        <div class="item-note">
          备注
        </div>
        <span class="icon ion-ios-arrow-right"></span>
      </item>
    </list>
  </div>
</template>
```

也可以直接使用相关的 class 或 attribute，如：

```html
<div class="list list-ios" thin-border>
  <div class="item item-ios">
    Item - 1
    <span class="item-note"></span>  
  </div>
  <div class="item item-ios">Item - 2</div>
  <div class="item item-ios">Item - 3</div>
</div>
```

[查看更多列表布局例子](https://github.com/wangdahoo/vonic/blob/master/demo/components/List.vue)
