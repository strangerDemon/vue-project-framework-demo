#Vuex

  是一个专为 Vue.js 应用程序开发的状态管理模式

# State 单一状态树 数据源

  作为一个“唯一数据源 (SSOT)”而存在

# Getter 计算属性 过滤计算器

  有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数

# Mutation 状态变更器，数据源更改

  最好提前在你的 store 中初始化好所有所需属性。

  当需要在对象上添加新属性时，你应该

    1、使用 Vue.set(obj, 'newProp', 123), 或者

    2、以新对象替换老对象

# Action 提交变更器

  Action 提交的是 mutation，而不是直接变更状态。

  Action 可以包含任意异步操作。

  const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    actions: {
        increment (context) {
            context.commit('increment')
        }
    }
  })

# Module 模块  分割store，解决臃肿

  由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。

  当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

  const moduleA = {
    state: { ... },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
    }

  const moduleB = {
    state: { ... },
    mutations: { ... },
    actions: { ... }
  }

  const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
  })
  store.state.a // -> moduleA 的状态
  store.state.b // -> moduleB 的状态

  # 结构

  store
  ├── index.js          # 我们组装模块并导出 store 的地方
  └── modules
      ├── cart.js       # 购物车模块
      └── products.js   # 产品模块
