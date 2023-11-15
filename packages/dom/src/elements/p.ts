import { MergePlugins, createCtor, createInstance } from '@ethf/core'
import { DOM, DOMPlugin } from './base/dom'

export type PPlugin<T> = DOMPlugin<HTMLParagraphElement, T>

function createPPlugin<T>(plugin: PPlugin<T>): PPlugin<T> {
    return plugin
}

const useP = createPPlugin(
    base => class extends base {
        constructor() {
            super()
            this.el = document.createElement('p')
            super.delayedInitialize()
        }
    }
)

export type P = MergePlugins<DOM<HTMLParagraphElement>, [ typeof useP ]>

export function createP(): P {
    return createInstance(DOM<HTMLParagraphElement>(), [ useP ])
}

export const PCtor = createCtor(DOM<HTMLParagraphElement>(), [ useP ])
