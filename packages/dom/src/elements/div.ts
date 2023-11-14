import { MergePlugins } from '@ethf/core';
import { createInstance } from '@ethf/core'
import { DOM, DOMPlugin } from "./base/dom"

export type DivPlugin<T> = DOMPlugin<HTMLParagraphElement, T>

function createDivPlugin<T>(plugin: DivPlugin<T>): DivPlugin<T> {
    return plugin
}

const useDiv = createDivPlugin(
    base => class extends base {
        constructor () {
            super()
            
            this.el = document.createElement('div')
            super.delayedInitialize()
        }
    }
)

export type Div = MergePlugins<DOM<HTMLDivElement>, [ typeof useDiv ]>

export function createDiv() {
    return createInstance(DOM<HTMLDivElement>(), [ useDiv ])
}
