# 页面和导航

## 页面

Vonic 主要采用 .page 和 .page-content 两个基类来定义页面

```html
<template>
  <div class="page has-navbar" v-nav="{title: '页面标题'}">
    <div class="page-content">
      <!-- 页面内容 -->
    </div>
  </div>
</template>
```

## 导航

Vonic.app 启动后，即执行 Vue.use(Vonic.app, {..}) 后，页面组件可以通过 v-nav 指令来控制导航栏行为。

##### v-nav 指令参数：

| 参数名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| title | 导航栏标题 | String | 否 | 无 |
| showBackButton | 是否显示返回按钮 | Boolean | 否 | false |
| onBackButtonClick | 返回按钮点击回调 | Function | 否 | 无 |
| showMenuButton | 是否显示菜单按钮 | Boolean | 否 | false |
| onMenuButtonClick | 菜单按钮点击回调 | Function | 否 | 无 |
| hideNavbar | 隐藏导航栏 | Boolean | 否 | false |
| backButtonText | 返回按钮模板 | String | 否 | 见备注 |
| menuButtonText | 菜单按钮模板 | String | 否 | 见备注 |

###### 备注：
backButtonText 默认值在 iOS 下为：
```html
<a class="button button-icon icon ion-ios-arrow-back"></a>
```

Android 下为：
```html
<a class="button button-icon icon ion-android-arrow-back"></a>
```

menuButtonText 默认值为：
```html
<a class="button button-icon icon ion-navicon"></a>
```


## 路由服务

Vonic.app 启动后，即注册 VueRouter 实例为 $router 服务。除了可以使用 Router 实例本身自带的方法外，新增 forward 方法和 back 方法。

这两个方法其实也是通过调用 router.go 方法来进行路由引导，只是调用 go 方法前会先定义页面的切换方向。
