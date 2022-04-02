# Affix 固钉
将页面元素钉在可视范围。
## 何时使用
* 当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
* 页面可视范围过小时，慎用此功能以免遮挡页面内容。
## 基本用法
<Affix-DemoOne />
以页面视野为参照作固定
```javascript
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
```
## 获取是否固定状态
<Affix-DemoTwo />
可以获得是否固定的状态。
```javascript
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
```
## 滚动容器
<Affix-DemoThree />
用 target 设置 Affix 需要监听其滚动事件的元素，默认为 window。
```javascript
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
```
## API
<Affix-ApiOne />
### 事件
<Affix-ApiTwo />
注意：Affix 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 Affix 为绝对定位：
```html
<d-affix :style="{ position: 'absolute', top: y, left: x}">
  ...
</d-affix>
```