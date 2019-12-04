# h-plugins (vue)

## h-plugins
```
自己的插件库
```

## 安装
```
yarn add h-plugins
npm i h-plugins
```
## 项目引入
```
入口文件引入
import *** from "h-plugins";
import "h-plugins/dist/h-plugin.css";
Vue.use(h-plugins)
```
## 页面使用 tab切换
```
<h-tabs v-model="active" :tabList="list"></h-tabs>
```
## pdf导出的方法
```
<button @click="$exportSavePdf('标题')">导出</button>
<div id="pdfCentent">
   123
</div>
$exportSavePdf 是导出pdf的内置方法（需要传入一个导出pdf的文件名）
id = pdfCentent 是导出的dom是必填项，不写会出错
```
