## 对话框

##### 服务：$dialog

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/dialog" frameborder="0"></iframe>
</div>

##### 用法：
```js
/* Alert 警告框 */
$dialog.alert({
  // 效果
  effect: 'default',
  // 标题
  title: '提示', 
  // 内容
  content: '这是一个警告框',
  // 按钮文本
  okText: '确定',
  // 按钮主题
  okTheme: 'assertive'
})

/* Confirm 确认框 */
$dialog.confirm({
  // 设置为ios样式
  theme: 'ios',
  // 标题
  title: '在"微信"中打开链接吗?',
  // 取消按钮文本
  cancelText: '取消',
  // 确定按钮文本
  okText: '打开'
}).then((res) => {
  console.log('confirm result: ', res)
})
```

[查看更多$dialog使用例子](https://github.com/wangdahoo/vonic/blob/master/demo/components/Dialog.vue)

##### 方法：

`Promise alert(options: Object)`

options 参数：

| 字段名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| effect | 效果 default、scale、slide | String | 否 | default |
| title | 标题 | String | 否 | 提示 |
| content | 内容 | String | 否 | 无 |
| okText | 按钮文本 | String | 否 | 确定 |
| okTheme | 按钮主题 | String | 否 | assertive |
| theme | 主题样式 default、ios | String | 否 | default |

> 当 theme 值为 ios 时，其他主题相关的参数（okTheme, cancelTheme，effect等）将不再起作用。

`Promise confirm(options: Object)`

options 参数：

| 字段名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| effect | 效果 default/scale/slide | String | 否 | default |
| title | 标题 | String | 否 | 提示 |
| content | 内容 | String | 否 | 无 |
| okText | 确定按钮文本 | String | 否 | 确定 |
| okTheme | 确定按钮主题 | String | 否 | assertive |
| cancelText | 取消按钮文本 | String | 否 | 确定 |
| cancelTheme | 取消按钮主题 | String | 否 | default |
| theme | 主题样式 default、ios | String | 否 | default |

> 当 theme 值为 ios 时，其他主题相关的参数（okTheme, cancelTheme，effect等）将不再起作用。
