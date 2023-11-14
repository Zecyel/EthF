import { MergePlugins, createInstance } from '@ethf/core';
import { XString } from '@ethf/data';
import { DOM, DOMPlugin } from './base/dom';

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

const usePTextContent = createPPlugin(
    base => class extends base {
        textContent: XString = new XString("")

        constructor () {
            super()
            this.textContent.onChange.bind((_) => {
                this.el.textContent = _.newValue
            })
        }
    }
)

export type P = MergePlugins<DOM<HTMLParagraphElement>, [ typeof usePTextContent, typeof useP ]>

export function createP() {
    return createInstance(DOM<HTMLParagraphElement>(), [ usePTextContent, useP ])
}
