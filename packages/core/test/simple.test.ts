import { describe, test, expect } from "@jest/globals"
import { XCore, XPlugin, createInstance } from "../src/plugin"

describe("Basic operations", () => {
    
    class Base extends XCore {}

    const plugin1 = (base: new () => Base) => class extends base {
        a: number = 10
        increase() {
            this.a += 1
        }
        get square() {
            return this.a * this.a
        }
    }

    test('Test function createInstance', () => {
        const base = createInstance(Base, [ plugin1 ])
        expect(base.a).toBe(10)
        base.increase()
        expect(base.a).toBe(11)
        expect(base.square).toBe(121)
    })

    function createBasePlugin<T>(plugin: XPlugin<Base, T>): XPlugin<Base, T> {
        return plugin
    }
    
    const plugin2 = createBasePlugin(
        base => class extends base {
            b: number = 20
        }
    )
    test('Test function createPlugin', () => {
        const base = createInstance(Base, [ plugin2 ])
        expect(base.b).toBe(20)
    })
    
    test('Test multiplugins', () => {
        const base = createInstance(Base, [ plugin1, plugin2 ])
        expect(base.a).toBe(10)
        expect(base.b).toBe(20)
    })
    
    const plugin3 = createBasePlugin(
        base => class extends base {
            a: number = 40
        }
    )

    test('Test overlap plugins', () => {
        const base = createInstance(Base, [ plugin1, plugin3 ])
        expect(base.a).toBe(40)
    })
})
