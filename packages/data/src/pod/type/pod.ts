import { EnvironmentType, createEnvironment, createEnvironmentPlugin } from '@ethf/env'
import { Trigger } from '@ethf/trigger'
import { Variant } from './../../variant'
import { PODType } from './../types'

function useXPODEnvironment<Type extends PODType>() {
    return createEnvironmentPlugin(
        base => class extends base {
            oldValue: Type
            newValue: Type
        }
    )
}

type Env<T extends PODType> = typeof useXPODEnvironment<T>

type XPODEnvironment<T extends PODType> = EnvironmentType<[ ReturnType<Env<T>> ]>

type XPODOnChangeTrigger<T extends PODType> = Trigger<XPODEnvironment<T>>

export class XPOD<Type extends PODType> implements Variant<Type, XPODEnvironment<Type>> {

    private onChangeTrigger = new Trigger<XPODEnvironment<Type>>()

    constructor (private _value: Type) {}

    get value(): Type {
        return this._value
    }

    set value(newValue: Type) {
        if (this._value === newValue)
            return

        let env = createEnvironment([ useXPODEnvironment<Type>() ])
        env.oldValue = this._value
        env.newValue = newValue
        this._value = newValue
        this.onChangeTrigger.trigger(env)
    }

    get onChange(): XPODOnChangeTrigger<Type> {
        return this.onChangeTrigger
    }
}
