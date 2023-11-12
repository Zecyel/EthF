import { EnvironmentType, createEnvironment, createEnvironmentPlugin } from "@ethf/env"
import { Trigger } from "@ethf/trigger"

export const useOnMountTrigger = createEnvironmentPlugin(
    base => class extends base {}
)

export type OnMountEnvironment = EnvironmentType<[ typeof useOnMountTrigger ]>

export type OnMountTrigger = Trigger<OnMountEnvironment>
export const OnMountTrigger = Trigger<OnMountEnvironment>

export const createOnMountTrigger = () => createEnvironment([ useOnMountTrigger ])
