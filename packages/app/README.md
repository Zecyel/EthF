# @ethf/app

`@ethf/app` 提供了 `App` 基类，用于创建 `Ethf` 应用。

## Installation

```sh
pnpm i @ethf/app
```

## Demo

```ts
import { createApp, createAppPlugin } from '@ethf/app'

const plugin = createAppPlugin(
    base => class extends base {
        a: number = 10
        printA() {
            console.log(`a = ${this.a}`)
        }
    }
)

const app = createApp([ plugin ])
app.printA() // expect to be 'a = 10'
app.a = 20
app.printA() // expect to be 'a = 20
```

## Documentation

### Class `App`

所有 `EthF` 应用的基类。注意，`App` 对象本身没有提供任何方法，所有的功能由插件实现。

### Type `AppPlugin<T>`

`App` 对象上插件的类型，`T` 通常可以通过自动推断得出。

### Function `createAppPlugin(plugin: AppPlugin): AppPlugin`

其本质是一个 `id` 函数，为 `plugin` 提供类型注解。

### Function `createApp(plugins: Plugins): MergePlugins<App, Plugins>`

`createApp` 函数用于根据插件创建出添加插件之后 `App` 对象的实例。
