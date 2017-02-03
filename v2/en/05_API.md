# API

You can also refer to [demo](https://github.com/wangdahoo/vonic/tree/master/demo) directly.

## Material Design Button

##### Component: Vonic.MdButton

##### Usage: 
```html
  <md-button class="button button-positive" @click="clicked()">
    Click Me
  </md-button>
```

## Input

##### Component: Vonic.VonInput

##### Usage: 

```html
<von-input 
  type="text" 
  :value.sync="username" 
  label="Username"
  placeholder="Username/Phone NO/Email" 
>
</von-input>
```

##### Props: 

| Name  | Description | Type | Required | Default |
| ----- | ----- | ----- | ----- | ----- |
| type  | text/password/email/tel | String | No | text |
| label  | label text | String | No | - |
| value  | input value | String、Number | Yes | - |
| placeholder | placeholder | String | No | - |
| floatingLabel | enable floating effect | String | No | false |

## Search

##### Component: Vonic.Search

##### Usage: 
```html
<template>
  <div>
    <search 
      :value.sync="keywords" 
      placeholder="keywords here" 
      :on-search="onSearch" 
      :clear-search="clearSearch"
    ></search>

    <div class="item" v-show="searching">
      searching for '{{keywords}}'.
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        keywords: '',
        searching: false
      }
    },
    methods: {
      onSearch(keywords) {
        this.searching = true;
      },
      clearSearch() {
        this.searching = false;
        this.keywords = ''
      }
    }
  }
</script>
```

##### Props: 

| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| value | input value |  String | Yes | 无 |
| placeholder | placeholder |  String | No | Search |
| cancelText | cancel button text |  String | No | 取消 |
| onSearch | callback for `seach` click |  Function | No | - |
| clearSearch | callback for `clear` click |  Function | No | - |

## Radio

##### Component: Vonic.VonRadio

##### Usage: 
```html
<template>
  <div>
    <div class="item item-divider">
      Gender:
    </div>
    <von-radio :options="genderOptions" :value.sync="gender"></von-radio>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        gender: 0,
        genderOptions: ["Male", "Female"]
      }
    }
  }
</script>
```

##### Props: 
| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| options | option list | Array | Yes | - |
| value | value | Number | Yes | - |
| theme | theme | String | No | assertive |

## Checkbox

##### Component: Vonic.VonCheckbox

##### Usage: 

```html
<template>
  <div>
    <div class="item item-divider">
      Chose what you're interested:
    </div>
    <von-checkbox :options="topics" :value.sync="chosenTopics" theme="positive"></von-checkbox>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        chosenTopics: [],
        topics: ["entertainment", "film", "sports", "funny", "science"]
      }
    }
  }
</script>
```

##### Props: 

| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| options | option list | Array | Yes | - |
| value | value | Array | Yes | - |
| theme | theme | String | No | assertive |

## Toggle

##### Component: Vonic.VonToggle

##### Usage: 
```html
<template>
  <div>
    <von-toggle 
      :text="toggleText" 
      :value.sync="pushNotification"></von-toggle>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        toggleText: "是否开启推送",
        pushNotification: true
      }
    }
  }
</script>
```

##### Props: 
| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| text | label text | String | Yes | - |
| value | value | Boolean | Yes | - |
| theme | theme | String | No | balanced |

## Popover

##### Component: Vonic.Popover

##### Usage: 
```html
<template>
  <div class="padding text-center">
    <div style="height: 100px;"></div>
    <button class="button button-positive" id="btn-top">show popover</button>
    
    <popover direction="top" target="#btn-top">
      I'm up here.
    </popover>
  </div>
</template>
```

##### Props: 
| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| direction | show up direction | String | No | top |
| target | element to show up from | String | Yes | - |

## Counter

##### Component: Vonic.Counter

##### Usage: 
```html
<counter style="width: 200px;" :value.sync="cnt"></counter>
```

##### Props: 

| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| value | value | Number | Yes | - |
| min | minimum |  Number | No | 0 |
| max | maximum |  Number | No | 100 |
| theme | theme |  String | No | assertive |

## Toast

##### Service: $toast

##### Usage: 
```js
/* show a toast and close in 3 seconds */
$toast.show('This is a Toast', 3000)

/* show a toast and close manully later */
$toast.show('Connecting..', 1E10)

/* close manully */
$toast.hide()
```

## Loading

##### Service: $loading

##### Usage: 
```js
/* show a loading and close manully later */
$loading.show('Loading..')

/* close manully */
$loading.hide()
```

## List

##### Component: Vonic.List、Vonic.Item、Vonic.HairlineItem

##### Usage: 
Vonic provide a complete **1px** border solution, with ionic's rich list/item styles.

use via components:

```html
<template>
  <div>
    <list>
      <item class="item-icon-right">
        文字
        <div class="item-note">
          备注
        </div>
        <span class="icon ion-ios-arrow-right"></span>
      </item>

      <hl-item class="item-icon-right">
        文字
        <div class="item-note">
          备注
        </div>
        <span class="icon ion-ios-arrow-right"></span>
      </hl-item>
    </list>
  </div>
</template>
```

or use via classes/attributes:

```html
<div class="list list-ios" thin-border>
  <div class="item item-ios">
    Item - 1
    <span class="item-note"></span>  
  </div>
  <div class="item item-ios">Item - 2</div>
  <div class="item item-ios">Item - 3</div>
</div>
```

[For more examples](https://github.com/wangdahoo/vonic/blob/master/demo/components/List.vue)

## Cells

##### Component: Vonic.Cells

##### Usage: 
```html
<template>
  <div>
    <cells :items="entrances" :on-cell-click="onCellClick" row="2"></cells>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        entrances: [
          '<div class="entrance assertive"><i class="icon ion-ios-flame"></i><br><span>热门</span></div>',
          '<div class="entrance energized"><i class="icon ion-ios-star"></i><br><span>好评</span></div>',
          '<div class="entrance balanced"><i class="icon ion-ios-location"></i><br><span>附近</span></div>',
          '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>'
        ]
      }
    }
  }
</script>
```

##### Props: 

| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| row | row number | Number | No | 3 |
| col | column number |  Number | No | 3 |
| items | items to fill in cells |  Array | Yes | - |
| onCellClick | callback for `cell` click |  Function | No | - |
| outerBorder | display outer border or not |  Boolean, String | No | true |

## Tabs

##### Component: Vonic.Tabs

##### Usage: 

```html
<template>
  <div>
    <tabs :tab-items="categories"
          :active-index.sync="activeCategoryIndex"
          position="bottom"
          bg-color="assertive"
          tab-color="light"
          :on-tab-changed="onCategoryChanged"
    ></tabs>
  </div>
</template>
<script>
  export default {
    data() {
      categories: [
        "女装",
        "男装",
        "内衣",
        "鞋靴",
        "箱包",
        "更多"
      ],
      activeCategoryIndex: 0
    },
    methods: {
      onCategoryChanged(activeIndex) {
        console.log('category changed, current tab index is:', activeIndex);
      }
    }
  }
</script>
```

##### Props: 

| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| position | top/bottom | String | No | top |
| bgColor | background color | String | No | light |
| tabColor | font color | String | No | positive |
| tabItems | tab text list | Array | Yes | - |
| activeIndex | active tab list | Number | Yes | - |
| onTabChanged | callback for tab click | Function | No | - |

> use vonic scenario colors `assertive/positive..` for bgColor、tabColor.

## ButtonBar

##### Component: Vonic.ButtonBar

##### Usage: 
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

##### Props: 

| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| tabItems | tab text list | Array | Yes | - |
| activeIndex | active tab index | Number | Yes | - |
| theme | theme | String | No | positive |


## Scalable

> "Small and Beatifull", but not my style.

##### Component: Vonic.Scalable

##### Usage: 

```html
<template>
  <div class="padding">
    <!-- set width to 100% parent container width, height to 100px -->
    <scalable width="100%" height="100" style="background-color: #FFF;">
      <p>
        Font Size = 16px (scale down to 8px)
      </p>
    </scalable>
  </div>
</template>
```

##### Props: 

| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| scale | scale rate | Number | No | 2 |
| width | container width | String | No | 100% |
| height | container height | String | No | 100% |

## Swiper

##### Component: Vonic.Swiper、Vonic.SwiperItem

##### Usage: 
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

##### Props: 

| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| direction | vertical/horizontal | String | No | vertical |
| width | swiper container width | String | No | 100% |
| height | swiper container height | String | No | 100% |
| pagerColor | pager color | String | 否 | #333 |
| pagerBgColor | pager background color | String | 否 | #333 |

##### Methods：

###### Void go(index :Number) 
> go to page by index

###### Void next() 
> go to next page

###### Void prev() 
> go to previous page

## Scroll

##### Component: Vonic.Scroll

##### Usage: 

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

[Online demo here](https://jsfiddle.net/wangdahoo/o72t05uk/)

##### Props: 

| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| onRefresh | callback on refresh | Function | No | - |
| onInfinite | callback on infinite loading | Function | No | - |

## Scroller

##### Component: Vonic.VueScroller

Vonic has integrated [vue-scroller](https://github.com/wangdahoo/vue-scroller). For vue-scroller [usage and examples](https://wangdahoo.github.io/vue-scroller/#!/index)

## Cascade

##### Component: Vonic.Cascade

##### Usage: [Online demo here](https://jsfiddle.net/wangdahoo/ac5k5y31/)

##### Props: 

| Name  | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| fields | field list | Array | Yes | - |
| data | raw data in arrays | Array | No | - |
| value | value | Array | Yes | - |
| ajaxUrl | url for ajax raw data | Array | No | 无 |
| ajaxData | field of ajax raw data | String | No | 无 |

## Dialog

##### Service: $dialog

##### Usage: 
```js
/* Alert */
$dialog.alert({
  // transition effect
  effect: 'default',
  // dialog title
  title: 'Message', 
  // dialog content
  content: 'Not enough minerals',
  // ok button text
  okText: 'Ok',
  // ok button theme
  okTheme: 'assertive'
})

/* Confirm */
$dialog.confirm({
  // show a ios style confirm dialog
  theme: 'ios',
  title: 'open this link in Wechat?',
  // cancel button text
  cancelText: 'No',
  // ok button text
  okText: 'Yes'
}).then((res) => {
  console.log('confirm result: ', res)
})
```

[More $dialog examples](https://github.com/wangdahoo/vonic/blob/master/demo/components/Popup.vue)

##### Methods:

###### Promise alert(options: Object)

options:

| Option | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| effect | default/scale/slide | String | No | default |
| title | dialog title | String | No | 提示 |
| content | dialog content | String | No | - |
| okText | button text | String | No | 确定 |
| okTheme | button theme | String | No | assertive |
| theme | default/ios | String | No | default |

> If you choose `theme` as `ios`, other theme related options (such as `okTheme`, `effect` etc) will not work any more.

###### Promise confirm(options: Object)

options:

| Option | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| effect | default/scale/slide | String | No | default |
| title | dialog title | String | No | 提示 |
| content | dialog content | String | No | - |
| okText | ok button text | String | - | 确定 |
| okTheme | ok button theme | String | - | assertive |
| cancelText | cancel button text | String | - | 确定 |
| cancelTheme | cancel button theme | String | - | default |
| theme | default/ios | String | - | default |

> If you choose `theme` as `ios`, other theme related options (such as `okTheme`, `effect` etc) will not work any more.


## Popup

##### Service: $popup

##### Usage: 

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

##### Methods:

###### Popup fromTemplate(template: String, options: Object) 

> create popup instance via template string.

template: template string

options:

| Option | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| effect | default/scale/slide | String | No | default |
| title | popup title | String | No | - |
| cssClass | custom css class | String | No | - |
| buttons | button definitions | Array | No | - |

###### Popup fromTemplateUrl(templateUrl: String, options: Object) 

> create popup instance via templateUrl who will response back a template string.

templateUrl: url who will response back a template string.

options:

as above.

##### Methods of popup instance：

###### Promise show() 
> show popup

###### Void hide() 
> hide popup

## Modal

##### Service: $vonicModal

##### Usage: [Checkout offical demo](https://github.com/wangdahoo/vonic/blob/master/demo/components/Modal.vue)

##### Methods:

###### Void fromComponent(modalRef: String, modalComponent:  Object)

> initiate a modal instance by a custom component.

###### Void show(modalRef: String)

> show modal

###### Void hide(modalRef: String)

> hide modal

##### Void destroy()

> destroy all modal instances

## ActionSheet

##### Service: $actionSheet

##### Usage: 

```js
$actionSheet.show({
  // total 3 styles for actionsheet, ios/android/weixin
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

## Sidebar

##### Service: $sidebar

##### Usage: 
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

##### Methods:

###### Sidebar fromTemplate(template: String, options: Object)

> create sidebar instance via template string.

###### Sidebar fromTemplateUrl(templateUrl: String, options: Object)

> create sidebar instance via a url which response back a template string.

##### Methods of a sidebar instance：

###### Void toggle()

> toggle sidebar

###### Void open()

> open sidebar

###### Void close()

> close sidebar


## Tabbar

##### Directive: v-tabbar

##### Usage: 

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

routes configuration: 

```js
  // other routes
  '/advanced/tabbar': {
    Component:  TabBar,
    subRoutes: {
      '/home': {
        Component:  TabBarHome
      },
      '/discount': {
        Component:  TabBarDiscount
      },
      '/cart': {
        Component:  TabBarCart
      },
      '/user': {
        Component:  TabBarUser
      }
    }
  },
  // other routes
```

##### Parameters:

| Parameter | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| menus | menu list | Array | Yes | - |
| menuColor | menu font color | String | No | #888 |
| activeMenuColor | active menu font color | String | No | #EA5A49 |
| onMenuClick | callback for menu click | Function | No | #EA5A49 |

## Storage

#####  Service: $storage

> Encapsulation of localStorage

##### Methods:

###### Void set(key: String, value: Object)
> save key and value

###### Void get(key: String)
> read by key

###### Void remove(key: String)
> remove by key

###### Void clear()
> remove all

###### Void on(key: String, callback: Function)
> listen on key

###### Void off(key: String, callback: Function)
> listen off
