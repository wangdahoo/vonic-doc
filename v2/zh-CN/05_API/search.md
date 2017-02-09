## 搜索框

##### 组件：Vonic.Search

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/search" frameborder="0"></iframe>
</div>

##### 用法：

```html
<template>
  <div class="page has-navbar" v-nav="{title: '搜索框'}">
    <div class="page-content">

      <search v-model="keywords" placeholder="输入关键字" :on-search="onSearch" :on-cancel="onCancel"></search>

      <div class="padding" v-show="searching">
        <span v-if="keywords">searching for '{{keywords}}'.</span>
      </div>

    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        keywords: '',
        searching: false
      }
    },

    methods: {
      onSearch(keywords) {
        this.searching = true;
      },

      onCancel() {
        this.searching = false;
        this.keywords = ''
      }
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| value | 值 |  String | 是 | 无 |
| placeholder | 占位符 |  String | 否 | Search |
| cancelText | 取消按钮文案 |  String | 否 | Cancel |
| onSearch | 点击搜索回调函数 |  Function | 否 | 无 |
| onCancel | 清除搜索回调函数 |  Function | 否 | 无 |
