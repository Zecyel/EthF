import { XString } from "@ethf/data"
import { createDOMBasePlugin } from "./dom"

export const useTextContent = createDOMBasePlugin(
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
