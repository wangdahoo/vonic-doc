## Tabbar

##### 指令：v-tabbar

##### 示例：


##### 用法：

```html
<template>
  <div class="page" v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
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
            path: '/tabbar/home'
          },
          {
            iconOn: 'ion-ios-pricetags',
            iconOff: 'ion-ios-pricetags-outline',
            text: '折扣',
            path: '/tabbar/discount'
          },
          {
            iconOn: 'ion-ios-cart',
            iconOff: 'ion-ios-cart-outline',
            text: '购物车',
            path: '/tabbar/cart'
          },
          {
            iconOn: 'ion-ios-person',
            iconOff: 'ion-ios-person-outline',
            text: '我的',
            path: '/tabbar/user'
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
  // tabbar routes
  {
    path: '/tabbar',
    component: Tabbar,
    children: [
      { path: 'home', component: TabbarHome },
      { path: 'cart', component: TabbarCart },
      { path: 'discount', component: TabbarDiscount },
      { path: 'user', component: TabbarUser }
    ]
  },
  // other routes
```

##### 参数：
| 参数名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| menus | 菜单项列表 | Array | 是 | 无 |
| menuColor | 菜单字体颜色 | String | 否 | #888 |
| activeMenuColor | 激活菜单字体颜色 | String | 否 | #EA5A49 |
| onMenuClick | 菜单点击回调 | Function | 否 | 无 |
