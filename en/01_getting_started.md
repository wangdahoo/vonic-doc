# Getting Started

## Dependencies
Vonic has several dependencies, make sure you have introduced them before your awesome work.
 - vue.js
 - vue-router.js
 - axios.js (Vue's offcial recommendation for Ajax)
 - ionic.css

## CDN
You can access to the latest versions of the resources via [unpkg/vonic](https://unpkg.com/vonic)
> current stable version is v0.6.0

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
Now, it's time to make a Hello-World with Vonic. Online Demo [Here](https://jsfiddle.net/wangdahoo/x2wf0x4j/).

Remember? Vonic is a framework for SPA (Single Page Application). So what we talk about here, is not to write a single page, but a skeleton of SPA.

Thanks to vonic, it's will be done in only 4 steps.

1.Make a Mount Point

```html
  <von-app></von-app>
```

2.Write Page Components

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

3.Define Routes

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

4.Start Your App

```
Vue.use(Vonic.app, {
  routes: routes,
  defaultRouterUrl: '/'
})
```

Yes! That's all.