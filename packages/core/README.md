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

[Api文档参考](./doc/api.md)
