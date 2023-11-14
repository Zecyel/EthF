import { describe, expect, test } from "@jest/globals"
import { MergePlugins, XCore, XPlugin, createCtor, createInstance } from "../src/plugin"

describe("Boundary Test", () => {

    test('Not-null base', () => {
        let base = createInstance(class extends XCore {
            x = 10
            y = 20
        }, [])
        
        expect(base.x).toBe(10)
        expect(base.y).toBe(20)
    })

    test("Nested plugin", () => {
        class Base extends XCore {}
        
        function createBasePlugin<T>(plugin: XPlugin<Base, T>): XPlugin<Base, T> {
            return plugin
        }
        
        let plugin1 = createBasePlugin(
            base => class extends base {
                a: number = 10
                getA(): number {
                    return this.a
                }
            }
        )

        type PluginedBase = MergePlugins<Base, [typeof plugin1]>
        const PluginedBase = createCtor(Base, [ plugin1 ])

        function createPluginedBasePlugin<T>(plugin: XPlugin<PluginedBase, T>): XPlugin<PluginedBase, T> {
            return plugin
        }

        let plugin2 = createPluginedBasePlugin(
            base => class extends base {
                b: number = 20
                getSum(): number {
                    return this.b + this.getA()
                }
            }
        )

        let instance = createInstance<PluginedBase, [ typeof plugin2 ]>(
            PluginedBase, [ plugin2 ]
        )

        expect(instance.getSum()).toBe(30)
    })
})