import { describe, test, expect } from "@jest/globals"
import { XCore, XPlugin, createInstance } from "../src/plugin"

describe("Boundary Test", () => {

    test('Not-null base', () => {
        let base = createInstance(class extends XCore {
            x = 10
            y = 20
        }, [])
        
        expect(base.x).toBe(10)
        expect(base.y).toBe(20)
    })
})