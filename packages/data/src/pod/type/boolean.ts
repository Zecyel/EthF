import { EnvironmentType, createEnvironment, createEnvironmentPlugin } from "@ethf/env"
import { Trigger } from "@ethf/trigger"
import { Variant } from "../../variant"

const useXBooleanEnvironmentPlugin = createEnvironmentPlugin(
    base => class extends base {
        oldValue: boolean
        newValue: boolean
    }
)

export type XBooleanEnvironment = EnvironmentType<[ typeof useXBooleanEnvironmentPlugin ]>

export type XBooleanOnChangeTrigger = Trigger<XBooleanEnvironment>

export class XBoolean implements Variant<boolean, XBooleanEnvironment> {

    private onChangeTrigger: XBooleanOnChangeTrigger = new Trigger<XBooleanEnvironment>()

    constructor (private _value: boolean) {}

    get value(): boolean {
        return this._value
    }

    set value(newValue: boolean) {
        if (this._value === newValue)
            return

        let env = createEnvironment([ useXBooleanEnvironmentPlugin ])
        env.oldValue = this._value
        env.newValue = newValue

        this._value = newValue

        this.onChangeTrigger.trigger(env)
    }

    get onChange(): XBooleanOnChangeTrigger {
        return this.onChangeTrigger
    }
}
