# Page, Navbar and Router

## Page

**Vonic** uses **.page** and **.page-content** to define `Page`.

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'Title Text'}">
    <div class="page-content">
      <!-- Page content goes here -->
    </div>
  </div>
</template>
```

## Navbar

Once **Vonic.app** started, you can control `Navbar`'s look and behavior via directive **v-nav**.

##### v-nav

| Parameters | Type | Required | Default |
|-----|-----|-----|-----|
| title | String | No | - |
| showBackButton | Boolean | No | false |
| onBackButtonClick | Function | No | - |
| showMenuButton | Boolean | No | false |
| onMenuButtonClick | Function | No | - |
| hideNavbar | Boolean | No | false |
| backButtonText | String | No | see remarks below |
| menuButtonText | String | No | see remarks below |

###### remarks：
**backButtonText** default values:

iOS Safari:
```html
<a class="button button-icon icon ion-ios-arrow-back"></a>
```

Android：
```html
<a class="button button-icon icon ion-android-arrow-back"></a>
```

**menuButtonText** default values:

```html
<a class="button button-icon icon ion-navicon"></a>
```

## Router

Once **Vonic.app** started, you'll get **$router** as a ref to the **VueRouter instance**. 

In addition, **$router** has two extra methods, **forward** and **back**, which can define page and navbar transition direction before do what exactly `router.go` does.
