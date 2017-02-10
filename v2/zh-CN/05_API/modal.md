## 模态窗

##### 服务：$modal

##### 示例：

<style>
  .device-ios { width: 467px; height: 800px; background: url(../img/devices-sprite.jpg) center top no-repeat; background-size: 467px; margin: 0 auto; text-align: center; }
  .demo-ios { margin-top: 85px; width: 320px; height: 568px; }
</style>

<div class="device-ios">
  <iframe class="demo-ios" src="https://wangdahoo.github.io/vonic-doc-examples/#/modal" frameborder="0"></iframe>
</div>

##### 用法：

- DefaultModal.vue

A Page Compoennt to be show in a modal.

```html
<template>
  <div class="page has-navbar">
    <div class="page-content padding padding-top">
      <p>
        我有一只小毛驴我从来也不骑。
      </p>

      <button v-if="!showMore" class="button button-assertive button-small" @click="more()">show more</button>
      <p v-if="showMore">
        有一天我心血来潮骑它去赶集。
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showMore: false
      }
    },

    methods: {
      more() {
        this.showMore = true
      }
    }
  }
</script>
```

- Modal.vue

A Page Component which will load a modal

```html
<template>
  <div class="page has-navbar" v-nav="{title: '模态窗', showBackButton: true}">
    <div class="page-content padding padding-top">
      <button class="button button-assertive button-block" @click="showModal()">默认</button>
    </div>
  </div>
</template>
<script>
  import DefaultModal from './modals/DefaultModal.vue'

  export default {
    data() {
      return {
        modal: undefined
      }
    },

    mounted() {
      $modal.fromComponent(DefaultModal, {
        title: '模态窗标题',
        theme: 'default'
      }).then((modal) => {
        this.modal = modal
      })
    },

    destroyed() {
      if (this.modal)
        $modal.destroy(this.modal)
    },

    methods: {
      showModal() {
        this.modal.show()
      }
    }
  }
</script>
```

##### 方法：

`Promise $modal.fromComponent(contentComponent: VueComponent, options: Object)`
> 创建模态窗

- contentComponent：需要加载到modal中的内容组件

- options 参数：

| 字段名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| title | 模态窗标题 | String | 否 | 无 |
| theme | 模态窗主题 | String | 否 | 无 |
| destroyOnHide | 是否在调用模态窗实例的hide方法后注销模态窗实例 | Function | 否 | false |

##### Modal 实例方法：

`Void show()`
显示模态窗

`Void hide()`
隐藏模态窗