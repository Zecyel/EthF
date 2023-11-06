import { MergePlugins } from "@ethf/core"
import { Environment, createEnvironment, createEnvironmentPlugin } from "@ethf/env"
import { useChain } from "@ethf/event-chain"
import { Trigger } from "@ethf/trigger"

const useButton = createEnvironmentPlugin(
    base => class extends base {
        x: number
        y: number
    }
)

let trig = new Trigger<MergePlugins<Environment, [ typeof useChain, typeof useButton ]>>()

document
    .getElementById('button')
    .addEventListener(
        'click',
        (ev) => {
            let env = createEnvironment([ useChain, useButton ])
            env.x = ev.clientX
            env.y = ev.clientY
            trig.trigger(env)
        }
    )

trig.bind((env) => {
    env.next((_) => { console.log(_.x, _.y) })
})