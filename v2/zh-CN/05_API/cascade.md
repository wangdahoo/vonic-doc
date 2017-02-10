## 级联

##### 组件：Vonic.Cascade

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/cascade" frameborder="0"></iframe>
</div>

##### 用法：

```html
<template>
  <div class="page has-navbar" v-nav="{title: '级联', showBackButton: true}">
    <div class="page-content padding-top">
      <div class="item item-divider">
        选择您所属的行政区划：
      </div>
      <cascade :fields="fields" :data="cities" :value="value" :on-change="onChange"></cascade>

      <!-- 使用远程数据 -->
      <!--
      <cascade
        :fields="fields"
        ajax-url="path/to/data"
        :value="value"
        :on-change="onChange"
      ></cascade>
      -->

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fields: [
          "省", "市", "区"
        ],

        cities: [
          ['北京市', '市辖区', '东城区'],
          // ...
        ],
        value: []
      }
    },

    methods: {
      onChange(value) {
        this.value = value
        console.log(this.value)
      }
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| fields | 字段列表 | Array | 是 | 无 |
| data | 数据（二维数组） | Array | 否 | 无 |
| value | 值 | Array | 是 | 无 |
| ajaxUrl | 返回数据的url | Array | 否 | 无 |
| ajaxData | url返回数据对应的字段 | String | 否 | 无 |
| onChange | 选项变更回调 | Function | 否 | 无 |
