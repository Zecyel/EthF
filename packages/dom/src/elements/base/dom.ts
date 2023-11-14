import { MergePlugins, XCore, XPlugin, createCtor } from "@ethf/core"
import { OnMountTrigger, createOnMountTrigger } from "../../trigger/mount"
import { Plugins } from "./plugins"

type BaseElement
    = HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
    | SVGElementTagNameMap[keyof SVGElementTagNameMap]

export class DOMBase<T extends BaseElement> extends XCore {

    el: T
    protected onMountTrigger = new OnMountTrigger()

    delayedInitialize() {}

    mount<T extends BaseElement>(par: DOMBase<T>) {
        par.el.appendChild(this.el)
        let env = createOnMountTrigger()
        this.onMountTrigger.trigger(env)
    }

    get onMount(): OnMountTrigger {
        return this.onMountTrigger
    }
}

export type DOMBasePlugin<ElType extends BaseElement, T> = XPlugin<DOMBase<ElType>, T>

export function createDOMBasePlugin<ElType extends BaseElement, T>(plugin: DOMBasePlugin<ElType, T>): typeof plugin {
    return plugin
}

export type DOM<ElType extends BaseElement> = MergePlugins<DOMBase<ElType>, Plugins>

export const DOM = <ElType extends BaseElement>() => createCtor(DOMBase<ElType>, Plugins)

export type DOMPlugin<ElType extends BaseElement, T> = XPlugin<DOM<ElType>, T>

export function createDOMPlugin<ElType extends BaseElement, T>(plugin: DOMPlugin<ElType, T>): typeof plugin {
    return plugin
}
