import { createDOMBasePlugin } from "../dom"

export const useClass = createDOMBasePlugin(
    base => class extends base {
        addClass(...cls: string[]) {
            this.el.classList.add(...cls.filter((v) => v !== ''))
        }

        removeClass(...cls: string[]) {
            this.el.classList.remove(...cls.filter((v) => v !== ''))
        }
    }
)
