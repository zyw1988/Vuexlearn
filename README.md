VUEX作为状态管理模式，采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

用于解决的问题：
1.多层嵌套的组件繁琐，并且对于兄弟组件间的状态传递无能为力。
2.父子组件直接引用或者通过事件来变更和同步状态的多份拷贝，导致代码无法维护。

--->把组件的共享状态抽取出来，以一个全局单例模式管理

一、核心概念
每一个Vuex的应用核心是store（仓库），store基本上是一个容器。和其他全局对象的区别。
1.Vuex的存储状态是响应式的，当store中的状态发生改变，相应的组件也会被更新。
2.无法直接改变store中的状态。唯一途径是显示的提交（commit）mutation。这样也能更明确的追踪到状态的改变。
<!-- 
    new Vue({
    el:"#app",
    data:{
        msg:'000'
    }, 
    render:c=>c(App),
    // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
    // 子组件能通过 this.$store 访问到
    store
})
 -->
（一）、state
（二）、getter
Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
getter接收state作为第一个参数。
（三）、更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
接收state作为第一个参数，也可以传入额外的参数，即mutation的载荷，大多数情况下载荷为一个对象。
也可以直接将提交mutation的方式改为对象形式。
<!-- 
store.commit({
  type: 'func',
  amount: 10
})
 -->
在组件中提交Mutation
1.this.$store.commit('xxx')方法提交
2.mapMutations辅助函数将组建中的methods映射为store.commit调用
<!-- 
    methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
 -->
 (三)、Action未来处理异步操作
 待更新