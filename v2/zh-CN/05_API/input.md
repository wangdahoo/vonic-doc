## 输入框

##### 组件：Vonic.VonInput

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/input" frameborder="0"></iframe>
</div>

##### 用法：

```html
<von-input 
  type="text" 
  v-model="username" 
  placeholder="用户名/手机/邮箱" 
  label="用户名">
</von-input>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| type  | 类型 | String | 否 | text |
| label  | 标签文字 | String | 否 | - |
| value  | 值 | String、Number | 是 | - |
| placeholder | 占位符 | String | 否 | - |
| floatingLabel | 开启悬浮标签 | String | 否 | false |

> 注：VonInput 的 type 属性只支持 text/password/email/tel 四种。
