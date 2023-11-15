import { useClass } from "./class"
import { useOnClickDOM } from "./onclick"
import { useTextContent } from "./textContent"
import { useVisible } from "./visible"

export type Plugins = [
    typeof useOnClickDOM,
    typeof useVisible,
    typeof useTextContent,
    typeof useClass
]

export const Plugins = [
    useOnClickDOM,
    useVisible,
    useTextContent,
    useClass
]
