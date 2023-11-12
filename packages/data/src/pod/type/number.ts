import { EnvironmentType, createEnvironment, createEnvironmentPlugin } from "@ethf/env"
import { Trigger } from "@ethf/trigger"
import { Variant } from "../../variant"

const useXNumberEnvironment = createEnvironmentPlugin(
    base => class extends base {
        oldValue: number
        newValue: number
    }
)

export type XNumberEnvironment = EnvironmentType<[ typeof useXNumberEnvironment ]>

export type XNumberOnChangeTrigger = Trigger<XNumberEnvironment>

export class XNumber implements Variant<number, XNumberEnvironment> {

    private onChangeTrigger: XNumberOnChangeTrigger = new Trigger<XNumberEnvironment>()
    
    constructor (private _value: number) {}
    
    get value(): number {
        return this._value
    }

    set value(newValue: number) {
        if (this._value === newValue)
            return

        let env = createEnvironment([ useXNumberEnvironment ])
        env.oldValue = this._value
        env.newValue = newValue

        this._value = newValue

        this.onChangeTrigger.trigger(env)
    }

    get onChange(): XNumberOnChangeTrigger {
        return this.onChangeTrigger
    }
}
