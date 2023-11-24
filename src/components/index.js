/**
 * 动态插入全局组件
 * note:  我们把经常使用的组件放在/components/libs
 */
const modules = import.meta.glob('../components/libs/*')
const components = {
  install: (app) => {
    for (const path in modules) {
      modules[path]().then(async (mod) => {
        await app.component(mod.default.__name, mod.default)
      })
    }
  }
}
export default components
