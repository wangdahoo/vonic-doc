## 开关按钮

##### 组件：Vonic.VonToggle

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/toggle" frameborder="0"></iframe>
</div>

##### 用法：

```html
<template>
  <div class="page has-navbar" v-nav="{title: '开关按钮'}">
    <div class="page-content padding-top">
      <von-toggle :text="toggleText" v-model="pushNotification"></von-toggle>
      <div class="item item-divider">开关状态: <span>{{ pushNotification ? '开启' : '关闭' }}</span></div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        toggleText: "是否开启推送",
        pushNotification: true
      }
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| text | 标签文字 | String | 是 | 无 |
| value | 值 |  Boolean | 是 | 无 |
| theme | 主题 |  String | 否 | assertive |
