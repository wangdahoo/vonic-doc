## 多选框

##### 组件：Vonic.VonCheckbox

##### 用法：

```html
<template>
  <div class="page has-navbar" v-nav="{title: '复选框'}">
    <div class="page-content">
      <div class="item item-divider">
        选择感兴趣的板块:
      </div>

      <von-checkbox :options="topics" v-model="chosenTopics" theme="positive"></von-checkbox>

      <p class="padding">
        chosen topics: {{ chosenTopics }}
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        chosenTopics: [],
        topics: ["娱乐", "电影", "减肥", "搞笑", "科技"]
      }
    },

    watch: {
      chosenTopics: (newVal) => {
        console.log(newVal)
      }
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| options | 选项列表 | Array | 是 | 无 |
| value | 值 |  Array | 是 | 无 |
| theme | 主题 |  String | 否 | assertive |

运行效果如下：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/checkbox" frameborder="0"></iframe>
</div>