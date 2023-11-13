import { OnMountTrigger, createOnMountTrigger } from "../trigger/mount"

export class Base {

    el: Node
    protected onMountTrigger = new OnMountTrigger()

    mount(par: Base) {
        par.el.appendChild(this.el)
        let env = createOnMountTrigger()
        this.onMountTrigger.trigger(env)
    }

    get onMount(): OnMountTrigger {
        return this.onMountTrigger
    }
}
