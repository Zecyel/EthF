# @ethf/core

`@ethf/core` 提供了对插件的支持。

## Installation

```sh
pnpm i @ethf/core
```

## Demo

```ts
import { createInstance, XCore } from "@ethf/core"

class Base extends XCore {}

const plugin = 
    (base: new () => Base) => class extends base {
        a: number = 10
        printA() {
            console.log(`a = ${this.a}`)
        }
    }

const instance = createInstance(Base, [ plugin ])

instance.printA() // expect to be 'a = 10'
instance.a = 20
instance.printA() // expect to be 'a = 20'
```

## Documentation

### Class `XCore`

所有支持插件的对象都应该继承自 `XCore`。其上没有成员函数。

### Type `XPlugin<Base, T>`

`XPlugin<Base, T>` 定义了一个插件的类型，它应当是一个将 `Base` 作为参数的函数，并返回一个继承自 `Base` 的类 `T`。同时还要求 `Base` 继承自 `XCore`。

### Function `createPlugin<Base, T>(plugin: XPlugin<Base, T>): XPlugin<Base, T>`

其本质是 `id` 函数，它为 `plugin` 参数提供类型注解。例如在上例中，如果定义了函数：

```ts
function createBasePlugin<T>(plugin: XPlugin<Base, T>): XPlugin<Base, T> {
    return plugin
}
```

则插件 `plugin` 可写作：

```ts
const plugin = createBasePlugin(
    base => class extends base {
        a: number = 10
        printA() {
            console.log(`a = ${this.a}`)
        }
    }
)
```

### Type `MergePlugins<Base, Plugins>`

`MergePlugins` 计算 `Base` 基类添加了 `Plugins` 插件后新类的类型。要求 `Plugins` 的每一项都是 `XPlugin<Base, T>` 类型。

例如上例中，`instance` 的类型是 `MergePlugins<Base, [ typeof plugin ]>`。

### Function `createInstance<Base, Plugins>(base: new () => Base, plugins: Plugins): MergePlugins<Base, Plugins>`

创建一个 `Base` 基类添加了 `Plugins` 插件后的新类的实例。
