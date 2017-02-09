## 单选框

##### 组件：Vonic.VonRadio

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/radio" frameborder="0"></iframe>
</div>

##### 用法：

```html
<template>
  <div class="page has-navbar" v-nav="{title: '单选框'}">

    <div class="page-content">
      <div class="item item-divider">
        选择性别:
      </div>

      <von-radio :options="genderOptions" v-model="gender"></von-radio>

      <p class="padding">
        option index: {{ gender }}<br>
        option text: {{ genderOptions[gender] }}
      </p>
    </div>

  </div>
</template>
<script>
  export default{
    data(){
      return {
        gender: 0,
        genderOptions: ["男", "女"]
      }
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| options | 选项列表 | Array | 是 | 无 |
| value | 值 |  Number | 是 | 无 |
| theme | 主题 |  String | 否 | assertive |
