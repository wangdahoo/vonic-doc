## 操作列表

##### 服务：$actionSheet

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/actionsheet" frameborder="0"></iframe>
</div>

##### 用法：

```js
$actionSheet.show({
  // 支持三种主题样式 ios/android/weixin
  theme: 'weixin',
  title: '标题',
  buttons: {
    'Action - 1': () => {
      console.log('action 1 called.')
    },

    'Action - 2': () => {
      console.log('action 2 called.')
    }
  }
})
```
