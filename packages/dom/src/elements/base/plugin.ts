import { useOnClickDOM, useVisible, useTextContent, useClass } from "./plugins"

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
