---
category: Components
type: Combination
title: ListView
subtitle: 长列表
---

适用于显示同类的长列表数据类型，对渲染性能有一定的优化效果。
`ListView`经常和 [RefreshControl](https://mobile.ant.design/components/refresh-control-cn/) 搭配使用。

## API

适用平台：WEB、React-Native(`DEPRECATED`)

注意: **React Native [ListView](https://facebook.github.io/react-native/docs/listview.html#content) 现在已经被标记了`DEPRECATED`**。因为我们内部是直接从 'react-native' 里导入`ListView`，所以我们也将废弃 ListView RN 版本。


属性 | 说明 | 类型 | 默认值
----|-----|------|------
| dataSource | [ListView.DataSource (cn)](https://reactnative.cn/docs/0.26/listviewdatasource.html) / [ListView.DataSource (us)](http://facebook.github.io/react-native/releases/0.26/docs/listviewdatasource.html) 实例 | ListViewDataSource | - |
| initialListSize | 指定在组件刚挂载的时候渲染多少行数据，用这个属性来确保首屏显示合适数量的数据 | number | - |
| onEndReached | 当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足`onEndReachedThreshold`个像素的距离时调用 | (event?) => {} | - |
| onEndReachedThreshold | 调用`onEndReached`之前的临界值，单位是像素 | number | 1000 |
| pageSize | 每次事件循环（每帧）渲染的行数 | number | 1 |
| renderHeader / renderFooter | 页头与页脚（如果提供）会在每次渲染过程中都重新渲染。如果它们重绘的性能开销很大，把他们包装到一个StaticContainer或者其它恰当的结构中。页脚在列表的最底部，而页头会在最顶部 | () => renderable | - |
| renderRow | 从数据源(data source)中接受一条数据，以及它和它所在section的ID。返回一个可渲染的组件来为这行数据进行渲染。默认情况下参数中的数据就是放进数据源中的数据本身，不过也可以提供一些转换器。如果某一行正在被高亮（通过调用highlightRow函数），ListView会得到相应的通知。 | (rowData, sectionID, rowID, highlightRow) => renderable | - |
| renderScrollComponent | 指定一个函数，在其中返回一个可以滚动的组件，ListView将会在该组件内部进行渲染。默认情况下会返回一个包含指定属性的ScrollView。 | (props) => renderable | - |
| renderSectionHeader | 如果提供了此函数，会为每个小节(section)渲染一个标题 | (sectionData, sectionID) => renderable | - |
| renderSeparator | 如果提供了此属性，一个可渲染的组件会被渲染在每一行下面，除了小节标题的前面的最后一行。在其上方的小节ID和行ID，以及邻近的行是否被高亮会作为参数传递进来。 | (sectionID, rowID, adjacentRowHighlighted) => renderable | - |
| scrollRenderAheadDistance | 当一个行接近屏幕范围多少像素之内的时候，就开始渲染这一行 | number | 1000 |
| contentContainerStyle | 这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内 | Object | - |
| horizontal | 当此属性为true的时候，所有的的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列 | bool | false |
| onContentSizeChange | 此函数会在 ScrollView 内部可滚动内容的视图发生变化时调用。 | (contentWidth, contentHeight) => {} | - |
| onScroll | 在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用`scrollEventThrottle`属性来控制。| e => {} | - |
| scrollEventThrottle | 控制在滚动过程中，scroll事件被调用的频率 | number | 50 |
| refreshControl | 指定 [RefreshControl](https://mobile.ant.design/components/refresh-control-cn/) 组件，用于为ScrollView 提供下拉刷新功能。 | element | - |
| onLayout | 当组件挂载或者布局变化的时候调用 | ({nativeEvent:{ layout:{ width, height }}}) => {} | - |
| ---- |
| renderBodyComponent (`web only`) | 自定义 body 的包裹组件 | () => renderable | - |
| renderSectionBodyWrapper (`web only`) | 渲染自定义的区块包裹组件 | (sectionID) => renderable | - |
| useBodyScroll (`web only`) | 使用 html 的 `body` 作为滚动容器 | bool | false |
| useZscroller (`web only`) | 使用 [zscroller](https://github.com/yiminghe/zscroller) 来模拟实现滚动容器 (可用于一些低端 Android 机上)，注意：开启后`useBodyScroll`和`stickyHeader`设置会自动被忽略 | bool | false |
| scrollerOptions (`web only`) | [zscroller options](https://github.com/yiminghe/zscroller#options) | Object | - |
| stickyHeader (`web only`) | 固定区块标题到页面顶部 (注意: 设置后会自动使用 html 的 `body` 作为滚动容器)，启用后还可以设置 `stickyProps / stickyContainerProps` (详见 [react-sticky](https://github.com/captivationsoftware/react-sticky)) | bool | false |

### 方法

- getMetrics() - 导出一些用于性能分析的数据。
- scrollTo(...args) - 滚动到指定的x, y偏移处(暂不支持过渡动画)。


## ListView.IndexedList

适用平台：WEB。

此组件常用于 “通讯录”/“城市列表” 等场景中，支持索引导航功能。

> 你可以使用 ListView 上的几乎所有 APIs，除了`useZscroller`
>
> 注意：由于索引列表可以点击任一项索引来定位其内容、即内容需要直接滚动到任意位置，这样就难以做到像 ListView 一样能在滚动时自动懒渲染。目前实现上只支持分两步渲染，能借此达到首屏优先显示目的，但如果列表数据量过大时、整体性能仍会有影响。

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| quickSearchBarTop | 快捷导航栏最顶部按钮、常用于回到顶部 | object{value:string, label:string} | `{ value: '#', label: '#' }` |
| quickSearchBarStyle | quickSearchBar 的 style | object | - |
| onQuickSearch | 快捷导航切换时调用 | (sectionID: any, topId?:any) => void | - |
| showQuickSearchIndicator | whether show quick search indicator | bool | false |
| delayTime | 延迟渲染时间设置（用于首屏优化，一开始渲染`initialListSize`数量的数据，在此时间后、延迟渲染剩余的数据项、即`totalRowCount - initialListSize`） | number |`100ms` |
| delayActivityIndicator | 延迟渲染的 loading 指示器 | react node | - |


## 常见问题与实现原理

- onEndReached 为什么会不停调用？ https://github.com/ant-design/ant-design-mobile/issues/520#issuecomment-263510596
- 如何设置滚动到列表的某一位置？(例如，点击列表某一项进入另一个页面，再返回到原位置) #541
- 其他问题：#633 #573

ListView 有三种类型的滚动容器：

1. html 的 body 容器
2. 局部 div 容器 (通过 ref 获取到)
3. 使用 zscroller 的模拟滚动容器

前两种获取到相应元素后，调用 scrollTo 方法、滚动到指定位置；
第三种通过 ref 获取到组件对象、再获取到 domScroller 、调用 scrollTo 方法。
但滚动到具体什么位置，业务上其实也比较难确定。

另一问题：对 dataSource 对象变化时的处理方式是什么？何时调用 onEndReached 方法？

ListView 在 componentWillReceiveProps 里会监听 dataSource 对象的变化，并做一次
[`this._renderMoreRowsIfNeeded()`](https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L156) ，
由于此时[`this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()`](https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L348)
即已经渲染的数据与 dataSource 里已有的数据项个数相同，所以 ListView 认为应该再调用 onEndReached 方法。
