import { XBoolean, XPOD } from "@ethf/data"
import * as dom from "@ethf/dom"

export type ButtonColorType = 'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link'
export type ButtonColor = XPOD<ButtonColorType>
export const ButtonColor = XPOD<ButtonColorType>

function buttonColorToClassName(color: ButtonColor): string {
    if (color.value === 'default') {
        return ''
    } else {
        return `btn-${color}`
    }
}

export class Button extends dom.ButtonCtor {

    color: ButtonColor = new ButtonColor('default')
    active: XBoolean = new XBoolean(false)

    constructor () {
        super() // el already created
        this.addClass('btn')

        this.active.onChange.bind((_) => {
            if (_.newValue) {
                this.addClass('btn-active')
            } else {
                this.removeClass('btn-active')
            }
        })

        this.color.onChange.bind((_) => {
            if (buttonColorToClassName(_.oldValue) !== '') {
                this.removeClass(buttonColorToClassName(_.oldValue))
            }
            if (buttonColorToClassName(_.newValue) !== '') {
                this.addClass(buttonColorToClassName(_.newValue))
            }
        })
    }
}
