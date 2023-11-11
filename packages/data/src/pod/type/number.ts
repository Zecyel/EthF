import { EnvironmentType, createEnvironment, createEnvironmentPlugin } from "@ethf/env"
import { Trigger } from "@ethf/trigger"
import { Variant } from "../../variant"

const useXNumberEnvironmentPlugin = createEnvironmentPlugin(
    base => class extends base {
        oldValue: number
        newValue: number
    }
)

export type XNumberEnvironment = EnvironmentType<[ typeof useXNumberEnvironmentPlugin ]>

export type XNumberOnChangeTrigger = Trigger<XNumberEnvironment>

export class XNumber implements Variant<number, XNumberEnvironment> {

    private onChangeTrigger: XNumberOnChangeTrigger | undefined = undefined
    
    constructor (private _value: number) {}
    
    get value(): number {
        return this._value
    }

    set value(newValue: number) {
        if (this._value === newValue)
            return

        if (this.onChangeTrigger === undefined) {
            this._value = newValue
            return
        }

        let env = createEnvironment([ useXNumberEnvironmentPlugin ])
        env.oldValue = this._value
        env.newValue = newValue

        this._value = newValue

        this.onChangeTrigger.trigger(env)
    }

    get onchange(): XNumberOnChangeTrigger {
        if (this.onChangeTrigger === undefined) {
            return this.onChangeTrigger = new Trigger<XNumberEnvironment>()
        }
        return this.onChangeTrigger
    }
}
