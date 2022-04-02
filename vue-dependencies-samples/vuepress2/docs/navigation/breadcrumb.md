# Breadcrumb 面包屑
显示当前页面在系统层级结构中的位置，并能向上返回。
## 何时使用
* 当系统拥有超过两级以上的层级结构时；
* 当需要告知用户『你在哪里』时；
* 当需要向上导航的功能时。
## 基本用法
<Breadcrumb-DemoOne />
最简单的用法
```html
  <d-breadcrumb>
    <d-breaditem>Home</d-breaditem>
    <d-breaditem><a href="">Application Center</a></d-breaditem>
    <d-breaditem><a href="">Application List</a></d-breaditem>
    <d-breaditem>An Application</d-breaditem>
  </d-breadcrumb>
```
## 带图标
<Breadcrumb-DemoTwo />
图标放在文字前面
```html
  <d-breadcrumb>
    <d-breaditem href="">
      <d-icon type="home" />
    </d-breaditem>
    <d-breaditem href="">
      <d-icon type="user" />
      <span>Application List</span>
    </d-breaditem>
    <d-breaditem>
      Application
    </d-breaditem>
  </d-breadcrumb>
```
## 分隔符
<Breadcrumb-DemoThree />
使用separator=">"可以自定义分隔符，或者使用slot="separator"自定义更复杂的分隔符
```html
  <d-breadcrumb separator=">">
    <d-breaditem>Home</d-breaditem>
    <d-breaditem href="">Application Center</d-breaditem>
    <d-breaditem href="">Application List</d-breaditem>
    <d-breaditem>An Application</d-breaditem>
  </d-breadcrumb>
  <d-breadcrumb>
    <span slot="separator" style="color: red">></span>
    <d-breaditem>Home</d-breaditem>
    <d-breaditem href="">Application Center</d-breaditem>
    <d-breaditem href="">Application List</d-breaditem>
    <d-breaditem>An Application</d-breaditem>
  </d-breadcrumb>
```
## 和vue-router结合使用
<Breadcrumb-DemoFour />
和 vue-router 进行结合使用。
```html
  <a-breadcrumb :routes="routes">
    <template slot="itemRender" slot-scope="{route, params, routes, paths}">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{route.breadcrumbName}}
      </span>
      <router-link v-else :to="`${basePath}/${paths.join('/')}`">
        {{route.breadcrumbName}}
      </router-link>
    </template>
  </a-breadcrumb>
  <br/>
  {{$route.path}}
```
## API
<Breadcrumb-ApiOne />
