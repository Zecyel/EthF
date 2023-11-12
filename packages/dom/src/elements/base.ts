import { OnMountTrigger, createOnMountTrigger } from "../trigger/mount"

export class Base {

    el: Node
    protected onMountTrigger = new OnMountTrigger()

    mount() {
        let env = createOnMountTrigger()
        this.onMountTrigger.trigger(env)
    }

    get onMount(): OnMountTrigger {
        return this.onMountTrigger
    }
}

export class appendChild(par: Base, son: Base) {
    par.el.appendChild(son.el)
}
