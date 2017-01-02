# 起步

## 依赖
Vonic 有以下几个依赖库，在开始写你极（diao）其（de）美（yi）妙（bi）的代码之前，请先引入它们。
 - vue.js
 - vue-router.js
 - axios.js (Vue官方推荐的ajax方案)
 - ionic.css

## CDN
通过 [unpkg/vonic](https://unpkg.com/vonic) 你可以快速获取最新的相关资源文件（含ionic样式）。
> 当前稳定版本为 v0.6.0

```html
<!-- ionic stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/vonic@0.6.0/dist/ionic/css/ionic.css">
<!-- axios, vue & vue-router -->
<script src="https://unpkg.com/axios@0.15.3/dist/axios.min.js"></script>
<script src="https://unpkg.com/vue@1.0.28/dist/vue.min.js"></script>
<script src="https://unpkg.com/vue-router@0.7.13/dist/vue-router.min.js"></script>

<!-- and then, vonic core -->
<link rel="stylesheet" href="https://unpkg.com/vonic@0.6.0/dist/vonic.min.js">
```

## Hello World
好了，是时候整一个 Hello World 了。[查看在线范例](https://jsfiddle.net/wangdahoo/x2wf0x4j/).

前面讲过，Vonic 是一个用来做单页应用的UI框架。所以，我们这里谈论的 Hello World 不是一个单个的页面，而是一个单页应用骨架。

在 Vonic 的帮助下，只需4个简单的步骤，即可完成一个单页应用骨架。

1.应用挂载点

```html
  <von-app></von-app>
```

2.写两个页面级组件

```js
const Index = {
  template: `
    <div class="page has-navbar" v-nav="{ title: 'Home' }">
      <div class="page-content text-center">
        <p class="padding">{{ msg }}</p>
        
        <a class="button button-positive" v-link="{ path: '/about' }">
        	to about
        </a>
      </div>
    </div>
  `,
  data() {
    return { msg: 'Hello, World!' }
  }
}

const About = {
  template: `
    <div class="page has-navbar" v-nav="{ title: 'About', showBackButton: true }">
      <div class="page-content text-center">
        <p class="padding">Nothing Here.</p>
      </div>
    </div>
  `
}
```

3.定义路由

```js
const routes = {
  '/': {
    component: Index
  },

  '/about': {
    component: About
  }
}
```

4.以添加Vue插件的方式启动你的应用

```
Vue.use(Vonic.app, {
  routes: routes,
  defaultRouterUrl: '/'
})
```

没错，就这么简单。
