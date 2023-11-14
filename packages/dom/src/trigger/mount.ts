import { EnvType, createEnv, createEnvPlugin } from "@ethf/env"
import { Trigger } from "@ethf/trigger"

export const useOnMountTrigger = createEnvPlugin(
    base => class extends base {}
)

export type OnMountEnvironment = EnvType<[ typeof useOnMountTrigger ]>

export type OnMountTrigger = Trigger<OnMountEnvironment>
export const OnMountTrigger = Trigger<OnMountEnvironment>

export const createOnMountTrigger = () => createEnv([ useOnMountTrigger ])
