# Button 按钮
按钮用于开始一个即时操作。
## 何时使用
* 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
## 基本用法
<!-- ![React logo](@static/pictures/react.jpg) -->
<Button-DemoOne />
按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。
```javascript
  const sourceOfTruth = {}

  const vmA = new Vue({
    data: sourceOfTruth
  })

  const vmB = new Vue({
    data: sourceOfTruth
  })
```
## 按钮组
<Button-DemoTwo />
可以将多个 Button 放入 Button.Group 的容器中。
通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。
```javascript
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
```
## 禁用状态
<Button-DemoThree />
添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
```javascript
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
```
## 幽灵按钮
<Button-DemoFour />
幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。
```javascript
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
```
## 图标按钮
<Button-DemoFive />
当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。
如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。
```javascript
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
```
## 加载中状态
<Button-DemoSix />
添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
```javascript
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
```
## 多个按钮组合
<Button-DemoSeven />
按钮组合使用时，推荐使用1个主操作 + n 个次操作，3个以上操作时把更多操作放到 Dropdown.Button 中组合使用。
```javascript
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
```
## 按钮尺寸
<Button-DemoEight />
按钮有大、中、小三种尺寸。
通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
```javascript
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
```
## block 按钮
<Button-DemoNine />
block属性将使按钮适合其父宽度。
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
通过设置 Button 的属性来产生不同的按钮样式，按钮的属性说明如下：
<Button-ApiOne />