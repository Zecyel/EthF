
import { EnvType, createEnv, createEnvPlugin } from "@ethf/env"
import { Trigger } from "@ethf/trigger"
import { createDOMBasePlugin } from "./dom"

export const useOnClickEnv = createEnvPlugin(
    base => class extends base {
        clientX: number
        clientY: number
    }
)

export type OnClickEnv = EnvType<[ typeof useOnClickEnv ]>

export const useOnClickDOM = createDOMBasePlugin(
    base => class extends base {
        onClick: Trigger<OnClickEnv> = new Trigger()

        delayedInitialize () {
            super.delayedInitialize()
            this.el.addEventListener('click', (ev: MouseEvent) => {
                let env = createEnv([ useOnClickEnv ])
                env.clientX = ev.clientX
                env.clientY = ev.clientY
                this.onClick.trigger(env)
            })
        }
    }
)
