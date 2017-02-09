# API

除了查阅API以外，你也可以直接查看[这里](https://github.com/wangdahoo/vonic/tree/master/demo)。

## 弹出

##### 组件：Vonic.Popover

##### 用法：
```html
<template>
  <div class="padding text-center">
    <div style="height: 100px;"></div>
    <button class="button button-positive" id="btn-top">show popover</button>
    
    <popover direction="top" target="#btn-top">
      我在上面
    </popover>
  </div>
</template>
```

##### 属性：
| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| direction | 出现方向 | String | 否 | top |
| target | 挂载弹出的元素 |  String | 是 | 无 |



## iOS 风格选项卡

##### 组件：Vonic.ButtonBar

##### 用法：
```html
<template>
  <div class="padding light-bg">
    <button-bar theme="assertive" :tab-items="promotions" :active-index.sync="promotionIndex"></button-bar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        promotions: ["往期热卖", "抢购进行中"],
        promotionIndex: 0
      }
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| tabItems | 选项列表 | Array | 是 | 无 |
| activeIndex | 激活选项索引 | Number | 是 | 无 |
| theme | 主题 | String | 否 | positive |


## 缩放布局

> 总有设计师拿着5，6像素大小的字跑来跟我说小而美。

##### 组件：Vonic.Scalable

##### 用法：

```html
<template>
  <div class="padding">
    <!-- 设置宽为父容器宽度，高为100px -->
    <scalable width="100%" height="100" style="background-color: #FFF;">
      <p>
        Font Size = 16px (相当于8px)
      </p>
    </scalable>
  </div>
</template>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| scale | 缩小比例 | Number | 否 | 2 |
| width | 容器宽度 | String | 否 | 100% |
| height | 容器高度 | String | 否 | 100% |

## 轮播

##### 组件：Vonic.Swiper、Vonic.SwiperItem

##### 用法：
```html
<template>
  <div>
    <swiper direction="vertical">
      <swiper-item>
        <h1>Item 1</h1>
      </swiper-item>

      <swiper-item>
        <h1>Item 2</h1>
      </swiper-item>

      <swiper-item>
        <h1>Item 3</h1>
      </swiper-item>
    </swiper>
  </div>
</template>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| direction | vertical/horizontal | String | 否 | vertical |
| width | 宽度 | String | 否 | 100% |
| height | 高度 | String | 否 | 100% |
| pagerColor | 导航颜色 | String | 否 | #333 |

##### 方法：

###### Void go(index :Number) 
> 跳转到某一页

###### Void next() 
> 跳转到下一页

###### Void prev() 
> 跳转到上一页

## 滚动

##### 组件：Vonic.Scroll

##### 用法：

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'Scroll'}">
    <scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">
      <div v-for="(index, item) in items" @click="onItemClick(index, item)"
           class="item thin-border" :class="{'item-stable': index % 2 == 0}">
        {{ item }}
      </div>
    </scroll>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: []
      }
    },

    ready() {
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
    },

    methods: {
      onRefresh(done) {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;

          done()
        }, 1500)
      },

      onInfinite(done) {
        setTimeout(() => {
          let start = this.bottom + 1
          for (let i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10;

          done()
        }, 1500)
      },

      onItemClick(index, item) {
        console.log(index)
      }
    }
  }
</script>
```

[查看线上例子](https://jsfiddle.net/wangdahoo/o72t05uk/)

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| onRefresh | 下拉刷新回调 | Function | 否 | 无 |
| onInfinite | 无线加载回调 | Function | 否 | 无 |

## Vue Scroller

##### 组件：Vonic.VueScroller

Vonic 整合了 [VueScroller](https://github.com/wangdahoo/vue-scroller)。关于 VueScroller 的用法及例子，请[查看这里](https://wangdahoo.github.io/vue-scroller/#!/index)。

## 级联

##### 组件：Vonic.Cascade

##### 用法：[查看线上例子](https://jsfiddle.net/wangdahoo/ac5k5y31/)

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| fields | 字段列表 | Array | 是 | 无 |
| data | 数据（二维数组） | Array | 否 | 无 |
| value | 值 | Array | 是 | 无 |
| ajaxUrl | 返回数据的url | Array | 否 | 无 |
| ajaxData | url返回数据对应的字段 | String | 否 | 无 |

## 对话框

##### 服务：$dialog

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

[查看更多$dialog使用例子](https://github.com/wangdahoo/vonic/blob/master/demo/components/Popup.vue)

##### 方法：

###### Promise alert(options: Object)

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

###### Promise confirm(options: Object)

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


## 弹层

##### 服务：$popup

##### 用法：

```js
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
```

##### 方法：

###### Popup fromTemplate(template: String, options: Object) 

> 按模板字符串创建弹层实例

template：自定义popup模板字符串

options 参数：

| 字段名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| effect | 效果 default/scale/slide | String | 否 | default |
| title | 标题 | String | 否 | 无 |
| cssClass | 自定义样式类 | String | 否 | 无 |
| buttons | 按钮定义 | Array | 否 | 无 |

###### Popup fromTemplateUrl(templateUrl: String, options: Object) 

> 通过ajax按templateUrl返回模板字符串创建弹层实例

templateUrl：返回模板字符串的url

options 参数：

同上

##### Popup 实例方法：

###### Promise show() 
> 显示弹层

###### Void hide() 
> 关闭弹层

## 模态窗

##### 服务：$vonicModal

##### 用法：[参考官方范例](https://github.com/wangdahoo/vonic/blob/master/demo/components/Modal.vue)

##### 方法：

###### Void fromComponent(modalRef: String, modalComponent: Object)

> 注册模态窗

###### Void show(modalRef: String)

> 显示模态窗

###### Void hide(modalRef: String)

> 关闭模态窗

##### Void destroy()

> 销毁所有模态窗实例

## ActionSheet

##### 服务：$actionSheet

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

## 侧边栏

##### 服务：$sidebar

##### 用法：
```js
let template = `
  <p style="font-size: 14; line-height: 18px;">
    This is my December
    This is my time of the year
    This is my December
    This is all so clear
  </p>
`
let sidebar = $sidebar.fromTemplate(template, {position: 'left'})
sidebar.open()
```

##### 方法：

###### Sidebar fromTemplate(template: String, options: Object)
> 按模板字符串创建侧边栏实例

###### Sidebar fromTemplateUrl(templateUrl: String, options: Object)
> 按远程模板地址返回的模板字符串创建侧边栏实例

##### 侧边栏实例方法：

###### Void toggle()
> 切换

###### Void open()
> 打开

###### Void close()
> 关闭


## Tabbar

##### 指令：v-tabbar

##### 用法：

```html
<template>
  <div v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menus: [
          {
            iconOn: 'ion-ios-home',
            iconOff: 'ion-ios-home-outline',
            text: '首页',
            path: '/advanced/tabbar/home'
          },
          {
            iconOn: 'ion-ios-pricetags',
            iconOff: 'ion-ios-pricetags-outline',
            text: '折扣',
            path: '/advanced/tabbar/discount'
          },
          {
            iconOn: 'ion-ios-cart',
            iconOff: 'ion-ios-cart-outline',
            text: '购物车',
            path: '/advanced/tabbar/cart'
          },
          {
            iconOn: 'ion-ios-person',
            iconOff: 'ion-ios-person-outline',
            text: '我的',
            path: '/advanced/tabbar/user'
          }
        ]
      }
    },

    methods: {
      menuClicked(menuIndex) {
        console.log(menuIndex)
      }
    },

    beforeDestroy() {
      $tabbar.$emit('hideTabbar')
    }
  }
</script>
```

对应的嵌套路由配置：

```js
  // other routes
  '/advanced/tabbar': {
    component: TabBar,
    subRoutes: {
      '/home': {
        component: TabBarHome
      },
      '/discount': {
        component: TabBarDiscount
      },
      '/cart': {
        component: TabBarCart
      },
      '/user': {
        component: TabBarUser
      }
    }
  },
  // other routes
```

##### 参数：
| 参数名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| menus | 菜单项列表 | Array | 是 | 无 |
| menuColor | 菜单字体颜色 | String | 否 | #888 |
| activeMenuColor | 激活菜单字体颜色 | String | 否 | #EA5A49 |
| onMenuClick | 菜单点击回调 | Function | 否 | #EA5A49 |

## 本地存储

##### 服务：$storage

> Vonic 对 localStorage 的简易封装

##### 方法：

###### Void set(key: String, value: Object)
> 保存

###### Void get(key: String)
> 读取

###### Void remove(key: String)
> 清除

###### Void clear()
> 清除全部

###### Void on(key: String, callback: Function)
> 监听

###### Void off(key: String, callback: Function)
> 去除监听
