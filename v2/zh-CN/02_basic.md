# 基础

## 字体

Vonic 全局字体栈:

```css
body {
  font-family: '-apple-system', "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;
}
```

在iOS系统下，通过给body标签设置font属性，可以方便地使用苹方（细）字体

```html
<body font="pingfang">
  <!-- Your Magic -->
</body>
```

## 颜色

Vonic 提供以下几种场景色：

<p>
  <div class="color" style="background: #ea5a49; color: #fff; width: 200px; line-height: 20px; border-radius: 2px; padding: 10px; margin: 5px 10px 5px 0">
    Assertive <span style="font-size: 13px; color: #EEE; float: right; margin-top: 1px;">#EA5A49</span>
  </div>

  <div class="color" style="background: #4a90e2; color: #fff; width: 200px; line-height: 20px; border-radius: 2px; padding: 10px; margin: 5px 10px 5px 0">
    Positive <span style="font-size: 13px; color: #EEE; float: right; margin-top: 1px;">#4A90E2</span>
  </div>

  <div class="color" style="background: #44cc00; color: #fff; width: 200px; line-height: 20px; border-radius: 2px; padding: 10px; margin: 5px 10px 5px 0">
    Balanced <span style="font-size: 13px; color: #EEE; float: right; margin-top: 1px;">#44CC00</span>
  </div>

  <div class="color" style="background: #ffbd17; color: #fff; width: 200px; line-height: 20px; border-radius: 2px; padding: 10px; margin: 5px 10px 5px 0">
    Energized <span style="font-size: 13px; color: #EEE; float: right; margin-top: 1px;">#FFBD17</span>
  </div>

  <div class="color" style="background: #11c1f3; color: #fff; width: 200px; line-height: 20px; border-radius: 2px; padding: 10px; margin: 5px 10px 5px 0">
    Calm <span style="font-size: 13px; color: #EEE; float: right; margin-top: 1px;">#11C1F3</span>
  </div>

  <div class="color" style="background: #b5b5b5; color: #fff; width: 200px; line-height: 20px; border-radius: 2px; padding: 10px; margin: 5px 10px 5px 0">
    Royal <span style="font-size: 13px; color: #EEE; float: right; margin-top: 1px;">#B5B5B5</span>
  </div>

  <div class="color" style="background: #F5F5F5; color: #444; width: 200px; line-height: 20px; border-radius: 2px; padding: 10px; margin: 5px 10px 5px 0">
    Stable <span style="font-size: 13px; color: #484746; float: right; margin-top: 1px;">#F5F5F5</span>
  </div>

  <div class="color" style="background: #FFF; color: #484746; width: 200px; line-height: 20px; border-radius: 2px; padding: 10px; margin: 5px 10px 5px 0">
    Light <span style="font-size: 13px; color: #484746; float: right; margin-top: 1px;">#FFFFFF</span>
  </div>

  <div class="color" style="background: #484746; color: #fff; width: 200px; line-height: 20px; border-radius: 2px; padding: 10px; margin: 5px 10px 5px 0">
    Dark <span style="font-size: 13px; color: #EEE; float: right; margin-top: 1px;">#484746</span>
  </div>
</p>

> 这些场景色将作为主题元素融入到很多插件中去，如：Material Design Button、单选框、多选框、开关按钮、计数器、选项卡、对话框等。

## 图标

既然 vonic 是以 ionic 样式为基础的，那它当然也包含 [ionicons](http://ionicons.com/) 图标集。
