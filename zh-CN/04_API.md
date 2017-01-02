# API

除了查阅API以外，你也可以直接查看[这里](https://github.com/wangdahoo/vonic/tree/master/demo)。

## Material Design Button

##### 组件：Vonic.MdButton

##### 用法：
```html
  <md-button class="button button-positive" @click="clicked()">
    Click Me
  </md-button>
```

## 输入框

##### 组件：Vonic.VonInput

##### 用法：

```html
<von-input 
  type="text" 
  :value.sync="username" 
  label="用户名"
  placeholder="用户名/手机/邮箱" 
>
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

## 搜索框

##### 组件：Vonic.Search

##### 用法：
```html
<template>
  <div>
    <search 
      :value.sync="keywords" 
      placeholder="输入关键字" 
      :on-search="onSearch" 
      :clear-search="clearSearch"
    ></search>

    <div class="item" v-show="searching">
      searching for '{{keywords}}'.
    </div>
  </div>
</template>
<script>
  import {Search} from 'vonic'
  export default{
    components: {
      Search
    },
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

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| value | 值 |  String | 是 | 无 |
| placeholder | 占位符 |  String | 否 | Search |
| cancelText | 取消按钮文案 |  String | 否 | 取消 |
| onSearch | 点击搜索回调函数 |  Function | 否 | 无 |
| clearSearch | 清除搜索回调函数 |  Function | 否 | 无 |

## 单选框

##### 组件：Vonic.VonRadio

##### 用法：
```html
<template>
  <div>
    <div class="item item-divider">
      选择性别:
    </div>
    <von-radio :options="genderOptions" :value.sync="gender"></von-radio>
  </div>
</template>
<script>
  import {VonRadio} from 'vonic'
  export default {
    components: {
      VonRadio
    },
    data(){
      return {
        gender: 0,
        genderOptions: ["男", "女"]
      }
    }
  }
</script>
```

##### 属性：
| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| options | 选项列表 | Array | 是 | 无 |
| value | 值 |  Number | 是 | 无 |
| theme | 主题 |  String | 否 | assertive |

## 多选框

##### 组件：Vonic.VonCheckbox

##### 用法：

```html
<template>
  <div>
    <div class="item item-divider">
      选择感兴趣的板块:
    </div>
    <von-checkbox :options="topics" :value.sync="chosenTopics" theme="positive"></von-checkbox>
  </div>
</template>
<script>
  import {VonCheckbox} from 'vonic'
  export default {
    components: {
      VonCheckbox
    },
    data(){
      return {
        chosenTopics: [],
        topics: ["娱乐", "电影", "减肥", "搞笑", "科技"]
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

## 开关按钮

##### 组件：Vonic.VonToggle

##### 用法：
```html
<template>
  <div>
    <von-toggle 
      :text="toggleText" 
      :value.sync="pushNotification"></von-toggle>
  </div>
</template>
<script>
  import {VonToggle} from 'vonic'
  export default{
    components: {
      VonToggle
    },
    data(){
      return {
        toggleText: "是否开启推送",
        pushNotification: true
      }
    }
  }
</script>
```

##### 属性：
| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| text | 标签文字 | String | 是 | 无 |
| value | 值 |  Boolean | 是 | 无 |
| theme | 主题 |  String | 否 | balanced |

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

## 计数器

##### 组件：Vonic.Counter

##### 用法：
```html
<counter style="width: 200px;" :value.sync="cnt"></counter>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| value | 值 | Number | 是 | 无 |
| min | 最小值 |  Number | 否 | 0 |
| max | 最大值 |  Number | 否 | 100 |
| theme | 主题 |  String | 否 | assertive |

## 文字提示

##### 服务：$toast

##### 用法：
```js
/* 显示一个文字提示，3秒后关闭 */
$toast.show('这是一个提示', 3000)

/* 显示一个文字提示，稍后手动关闭 */
$toast.show('连接中..', 1E10)

/* 手动关闭 */
$toast.hide()
```

## 加载提示

##### 服务：$loading

##### 用法：
```js
/* 显示一个加载提示，稍后手动关闭 */
$loading.show('拼命加载中..')

/* 手动关闭 */
$loading.hide()
```

## 列表布局

##### 组件：Vonic.List、Vonic.Item、Vonic.HairlineItem

##### 用法：
Vonic 在 ionic 丰富的列表类样式基础上，做了完备的1px方案。

你可以通过引入组件的方式来使用它们，如：

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
    </list>
  </div>
</template>
<script>
  import {List, Item} from 'vonic'

  export default {
    components: {
      List, Item, 
    }
  }
</script>
```

也可以直接使用相关的class或attribute，如：

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

[查看更多列表布局例子](https://github.com/wangdahoo/vonic/blob/master/demo/components/List.vue)

## 宫格布局

##### 组件：Vonic.Cells

##### 用法：
```html
<template>
  <div>
    <cells :items="entrances" :on-cell-click="onCellClick" row="2"></cells>
  </div>
</template>
<script>
  import {Cells} from 'vonic'
  export default {
    components: {
      Cells
    },
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

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| row | 行数 | Number | 否 | 3 |
| col | 列数 |  Number | 否 | 3 |
| items | 列表项 |  Array | 否 | 100 |
| onCellClick | 宫格单元点击回调 |  Function | 否 | 无 |

## 选项卡

##### 组件：Vonic.Tabs

##### 用法：

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
  import {Tabs} from 'vonic'
  export default {
    components {
      Tabs
    },
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

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| position | 位置，top/bottom | String | 否 | top |
| bgColor | 背景色 | String | 否 | light |
| tabColor | 前景色 | String | 否 | positive |
| tabItems | 选项列表 | Array | 是 | 无 |
| activeIndex | 激活选项索引 | Number | 是 | 无 |
| onTabChanged | 选项卡点击回调 | Function | 否 | 无 |

> bgColor、tabColor 值均以 vonic 情景色表示。

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
  import {ButtonBar} from 'vonic'
  export default {
    components: {
      ButtonBar
    },

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
<script>
  import {Scalable} from 'vonic'
  export default {
    components: {
      Scalable
    }
  }
</script>
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
<script>
  import {Swiper, SwiperItem} from 'vonic'
  export default{
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| direction | vertical/horizontal | String | 否 | vertical |
| width | 宽度 | String | 否 | 100% |
| height | 高度 | String | 否 | 100% |
| pagerColor | 导航颜色 | String | 否 | #333 |

##### 方法：
- void go(index :Number) 跳转到某一页
- void next() 跳转到下一页
- void prev() 跳转到上一页

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
  import {Scroll} from 'vonic'
  export default {
    components: {
      Scroll
    },

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
| data | 数据（二维数组） | Array | 是 | 无 |
| value | 值 | Array | 是 | 无 |
