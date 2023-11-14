# @ethf/env

`@ethf/env` 提供了 `Env` 基类，用于包装数据和方法。

## Installation

```sh
pnpm i @ethf/env
```

## Demo

```ts
import { createEnv, createEnvPlugin } from '@ethf/env'

const plugin = createEnvPlugin(
    base => class extends base {
        a: number = 10
        printA() {
            console.log(`a = ${this.a}`)
        }
    }
)

const env = createEnv([ plugin ])
env.printA() // expect to be 'a = 10'
env.a = 20
env.printA() // expect to be 'a = 20'
```

## Documentation

### Class `Env`

所有 `EthF` 应用的基类。注意，`Env` 对象本身没有提供任何方法，所有的功能由插件实现。

### Type `EnvPlugin<T>`

`Env` 对象上插件的类型，`T` 通常可以通过自动推断得出。

### Function `createEnvPlugin(plugin: EnvPlugin): EnvPlugin`

其本质是一个 `id` 函数，为 `plugin` 提供类型注解。

### Function `createEnv(plugins: Plugins): MergePlugins<Env, Plugins>`

`createEnv` 函数用于根据插件创建出添加插件之后 `Env` 对象的实例。
