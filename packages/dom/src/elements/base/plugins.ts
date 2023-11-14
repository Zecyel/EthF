import { useOnClickDOM } from "./onclick"
import { useVisible } from "./visible"

export type Plugins = [
    typeof useOnClickDOM,
    typeof useVisible
]

export const Plugins = [
    useOnClickDOM,
    useVisible
]
