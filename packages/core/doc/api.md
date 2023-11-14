# Api

## Class `XCore`

所有支持插件的对象都应该继承自 `XCore`。其上没有成员函数。

## Type `XPlugin<Base, T>`

`XPlugin<Base, T>` 定义了一个插件的类型，它应当是一个将 `Base` 作为参数的函数，并返回一个继承自 `Base` 的类 `T`。同时还要求 `Base` 继承自 `XCore`。

## Function `createPlugin<Base, T>(plugin: XPlugin<Base, T>): XPlugin<Base, T>`

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

## Type `MergePlugins<Base, Plugins>`

`MergePlugins` 计算 `Base` 基类添加了 `Plugins` 插件后新类的类型。要求 `Plugins` 的每一项都是 `XPlugin<Base, T>` 类型。

例如上例中，`instance` 的类型是 `MergePlugins<Base, [ typeof plugin ]>`。

## Function `createInstance<Base, Plugins>(base: new () => Base, plugins: Plugins): MergePlugins<Base, Plugins>`

创建一个 `Base` 基类添加了 `Plugins` 插件后的新类的实例。

## Function `createCtor<Base, Plugins>(base: new () => Base, plugins: Plugins): new () => MergePlugins<Base, Plugins>`

与 `createInstance` 类似，不同的是，它返回一个构造函数而非实例。
