## 弹层

##### 服务：$popup

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/popup" frameborder="0"></iframe>
</div>

##### 用法：

```html
<template>
  <div class="page has-navbar" v-nav="{title: '弹层'}">
    <div class="page-content padding-top">
      <div class="item item-icon-right thin-border" @click="showPopup()">
        Show Popup
        <i class="icon ion-ios-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      showPopup() {
        let options = {
          effect: 'scale',
          title: '',
          buttons: [
            {text: '确定'},
            {text: '取消'},
          ]
        }

        let popup = $popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;">自定义内容</p>', options)

        popup.show().then((buttonIndex) => {
          console.log(buttonIndex)
        })
      }
    }
  }
</script>
```

##### 方法：

`Popup fromTemplate(template: String, options: Object)`
> 按模板字符串创建弹层实例

- template：模板字符串

- options 参数：

| 字段名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| effect | 效果 default/scale/slide | String | 否 | default |
| title | 标题 | String | 否 | 无 |
| cssClass | 自定义样式类 | String | 否 | 无 |
| buttons | 按钮定义 | Array | 否 | 无 |

`Popup fromTemplateUrl(templateUrl: String, options: Object) `
> 通过ajax按templateUrl返回模板字符串创建弹层实例

- templateUrl：返回模板字符串的url

- options 参数：

同上

##### Popup 实例方法：

`Promise show() `

显示弹层

`Void hide()` 

关闭弹层
