# mini-vite-plugin
### Vite插件是什么

使用Vite插件可以拓展Vite能力，比如解析用户自定义的文件输入，在打包代码前转译代码，或者查找第三方模块。

有点像过滤器，又有点像中间件

### Vite插件的形式

```javascript
export default {
    name: 'coboy-vite-plugin',
    resolveId(id) {},
    load(id) {},
    transform(code) {}
}
```



```javascript
export default function (options) {
    return {
        name: 'coboy-vite-plugin',
        resolveId(id) {},
        load(id) {},
        transform(code) {}
    }
}
```

### 插件钩子

开发时，Vite创建一个容器按照顺序调用各个钩子。

- config：修改Vite配置
- configResolved：Vite配置确认
- configureServer：用于配置dev server
- transformIndexHtml：用于转换宿主页
- resolveId：创建自定义确认函数，常用于定位第三方依赖
- load：创建自定义加载函数，可用于返回自定义的内容
- transform：可用于转换已加载的模块内容
- handleHotUpdate：自定义HMR更新时调用

