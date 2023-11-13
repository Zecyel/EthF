import { XBoolean, XString } from '@ethf/data'
import { Base } from "./base"

export class P extends Base {

    el: HTMLParagraphElement
    visible: XBoolean = new XBoolean(true)
    textContent: XString = new XString("")

    constructor () {
        super()
        this.el = document.createElement('p')
        this.visible.onChange.bind((_) => {
            if (_.newValue) {
                this.el.style.visibility = 'visible'
            } else {
                this.el.style.visibility = 'hidden'
            }
        })
        this.textContent.onChange.bind((_) => {
            this.el.textContent = _.newValue
        })
    }
}
