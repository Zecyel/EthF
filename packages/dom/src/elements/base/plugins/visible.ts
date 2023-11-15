import { XBoolean } from "@ethf/data"
import { createDOMBasePlugin } from "../dom"

export const useVisible = createDOMBasePlugin(
    base => class extends base {
        visible: XBoolean = new XBoolean(true)

        delayedInitialize () {
            super.delayedInitialize()
            this.visible.onChange.bind((_) => {
                if (_.newValue) {
                    this.el.style.visibility = 'visible'
                } else {
                    this.el.style.visibility = 'hidden'
                }
            })
        }
    }
)
