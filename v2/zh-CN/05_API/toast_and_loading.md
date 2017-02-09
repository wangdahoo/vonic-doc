## 提示

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/toastAndLoading" frameborder="0"></iframe>
</div>

### 文字提示

##### 服务：$toast

##### 用法：

```js
/* 显示一个文字提示，3秒后关闭 */
$toast.show('这是一个提示', 3000).then(() => {
  console.log('toast hide')
})

/* 显示一个文字提示，稍后手动关闭 */
$toast.show('连接中..', 1E10)

/* 手动关闭 */
$toast.hide()
```

### 加载提示

##### 服务：$loading

##### 用法：

```js
/* 显示一个加载提示，稍后手动关闭 */

$loading.show('拼命加载中..').then(() => {
  console.log('loading showed')

  $loading.hide(2000).then(() => {
    console.log('loading hide')
  })
})
```
