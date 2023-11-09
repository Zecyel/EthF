import { Trigger } from "@ethf/trigger"
import { EnvironmentType, createEnvironment, createEnvironmentPlugin } from "@ethf/env"

const useNumberPlugin = createEnvironmentPlugin(
    base => class extends base {
        oldValue: number
        newValue: number
    }
)

export type NumberEnvironment = EnvironmentType<[ typeof useNumberPlugin ]>

export type NumberOnChangeTrigger = Trigger<NumberEnvironment>

export class Number {

    private onChangeTrigger: NumberOnChangeTrigger | undefined = undefined
    
    constructor (private _value: number) {}
    
    get value(): number {
        return this._value
    }

    set value(newValue: number) {
        if (this._value === newValue)
            return

        if (this.onChangeTrigger === undefined)
            return

        let env = createEnvironment([ useNumberPlugin ])
        env.oldValue = this._value
        env.newValue = newValue

        this._value = newValue

        this.onChangeTrigger.trigger(env)
    }

    get onchange(): NumberOnChangeTrigger {
        if (this.onChangeTrigger === undefined) {
            return this.onChangeTrigger = new Trigger<NumberEnvironment>()
        }
        return this.onChangeTrigger
    }

    private createTrigger(): NumberOnChangeTrigger {
        return new Trigger()
    }
}