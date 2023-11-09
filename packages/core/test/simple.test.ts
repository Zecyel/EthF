import { describe, test, expect } from "@jest/globals"
import { XCore, createInstance } from "../src/plugin"

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
    const base = createInstance(Base, [ plugin1 ])
    test('Test constructor, method and get', () => {
        expect(base.a).toBe(10)
        base.increase()
        expect(base.a).toBe(11)
        expect(base.square).toBe(121)
    })
})
