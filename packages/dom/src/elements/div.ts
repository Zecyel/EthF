import { Base } from "./base"
import { XBoolean } from "@ethf/data"

export class Div extends Base {

    el: HTMLDivElement
    visible: XBoolean = new XBoolean(true)

    constructor () {
        super()
        this.visible.onChange.bind((_) => {
            if (_.newValue) {
                this.el.style.visibility = 'visible'
            } else {
                this.el.style.visibility = 'hidden'
            }
        })
    }

    mount() {
        this.el = document.createElement('div')
        super.mount()
    }
}
