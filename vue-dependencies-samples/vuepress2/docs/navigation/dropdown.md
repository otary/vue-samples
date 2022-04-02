# Dropdown 下拉菜单
向下弹出的列表。
## 何时使用
* 当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
## 基本用法
<Dropdown-DemoOne />
最简单的下拉菜单。
```html
  <a-dropdown>
    <a class="ant-dropdown-link" href="#">
      Hover me <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item>
        <a href="javascript:;">1st menu item</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;">2nd menu item</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;">3rd menu item</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
```
## 右键菜单
<Dropdown-DemoTwo />
默认是移入触发菜单，可以点击鼠标右键触发。
```html
  <a-dropdown :trigger="['contextmenu']">
    <span style="user-select: none">Right Click on Me</span>
    <a-menu slot="overlay">
      <a-menu-item key="1">1st menu item</a-menu-item>
      <a-menu-item key="2">2nd menu item</a-menu-item>
      <a-menu-item key="3">3rd menu item</a-menu-item>
    </a-menu>
  </a-dropdown>
```
## 带下拉框的按钮
<Dropdown-DemoThree />
左边是按钮，右边是额外的相关功能菜单。
```html
  <a-dropdown-button @click="handleMenuClick">
    Dropdown
    <a-menu slot="overlay" @click="handleMenuClick">
      <a-menu-item key="1"><a-icon type="user" />1st menu item</a-menu-item>
      <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item>
      <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item>
    </a-menu>
  </a-dropdown-button>
```
## 触发事件
<Dropdown-DemoFour />
点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。
```html
  <a-dropdown>
    <a class="ant-dropdown-link" href="#">
      Hover me, Click menu item <a-icon type="down" />
    </a>
    <a-menu slot="overlay" @click="onClick">
      <a-menu-item key="1">1st menu item</a-menu-item>
      <a-menu-item key="2">2nd menu item</a-menu-item>
      <a-menu-item key="3">3rd menu item</a-menu-item>
    </a-menu>
  </a-dropdown>
```
## 不可用项
<Dropdown-DemoFive />
分割线和不可用菜单项。
```html
  <a-dropdown>
    <a class="ant-dropdown-link" href="#">
      Hover me <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item key="0">
        <a target="_blank" rel="noopener noreferrer" href="http://www.dmall.com/">1st menu item</a>
      </a-menu-item>
      <a-menu-item key="1">
        <a target="_blank" rel="noopener noreferrer" href="http://www.dmall.com/">2nd menu item</a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="3" disabled>3rd menu item（disabled）</a-menu-item>
    </a-menu>
  </a-dropdown>
```
## 菜单隐藏方式
<Dropdown-DemoSix />
默认是点击关闭菜单，可以关闭此功能。
```html
  <a-dropdown v-model="visible">
    <a class="ant-dropdown-link" href="#">
      Hover me <a-icon type="down" />
    </a>
    <a-menu slot="overlay" @click="handleMenuClick">
      <a-menu-item key="1">Clicking me will not close the menu.</a-menu-item>
      <a-menu-item key="2">Clicking me will not close the menu also.</a-menu-item>
      <a-menu-item key="3">Clicking me will close the menu</a-menu-item>
    </a-menu>
  </a-dropdown>
```
## 弹出位置
<Dropdown-DemoSeven />
支持 6 个弹出位置： 'bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'
```html
<a-dropdown :placement="placement">
  <a-button>{{placement}}</a-button>
  <a-menu slot="overlay">
    <a-menu-item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </a-menu-item>
    <a-menu-item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </a-menu-item>
    <a-menu-item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </a-menu-item>
  </a-menu>
</a-dropdown>
<!-- placement 取约定值  -->
```
## 多级菜单
<Dropdown-DemoEight />
传入的菜单里有多个层级。
```html
  <a-dropdown>
    <a class="ant-dropdown-link" href="#">
      Cascading menu <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item>1st menu item</a-menu-item>
      <a-menu-item>2nd menu item</a-menu-item>
      <a-sub-menu title="sub menu" key="test">
        <a-menu-item>3rd menu item</a-menu-item>
        <a-menu-item>4th menu item</a-menu-item>
      </a-sub-menu>
      <a-sub-menu title="disabled sub menu" disabled>
        <a-menu-item>5d menu item</a-menu-item>
        <a-menu-item>6th menu item</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-dropdown>
```
## 触发方式
<Dropdown-DemoNine />
默认是移入触发菜单，可以点击触发。
```html
  <a-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" href="#">
      Click me <a-icon type="down" />
    </a>
    <a-menu slot="overlay">
      <a-menu-item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </a-menu-item>
      <a-menu-item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="3">3rd menu item</a-menu-item>
    </a-menu>
  </a-dropdown>
```
## API
<Dropdown-ApiOne />
### 事件
<Dropdown-ApiTwo />
### Dropdown.Button
<Dropdown-ApiThree />
### Dropdown.Button 事件
<Dropdown-ApiFour />