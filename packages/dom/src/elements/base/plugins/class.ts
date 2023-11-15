import { createDOMBasePlugin } from "../dom"

export const useClass = createDOMBasePlugin(
    base => class extends base {
        addClass(...cls: string[]) {
            this.el.classList.add(...cls)
        }

        removeClass(...cls: string[]) {
            this.el.classList.remove(...cls)
        }
    }
)
