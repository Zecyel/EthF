import { MergePlugins, createInstance } from "@ethf/core"
import { DOM, DOMPlugin } from "./base"

export type ButtonPlugin<T> = DOMPlugin<HTMLButtonElement, T>

function createButtonPlugin<T>(plugin: ButtonPlugin<T>): typeof plugin {
    return plugin
}

const useButton = createButtonPlugin(
    base => class extends base {
        constructor() {
            super()
            this.el = document.createElement('button')
            super.delayedInitialize()
        }
    }
)

export type Button = MergePlugins<DOM<HTMLButtonElement>, [ typeof useButton ]>

export function createButton() {
    return createInstance(DOM<HTMLButtonElement>(), [ useButton ])
}
