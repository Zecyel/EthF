import { XBoolean, XPOD } from "@ethf/data"
import * as dom from "@ethf/dom"

export type ButtonColorType = 'default' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'link'
export type ButtonColor = XPOD<ButtonColorType>
export const ButtonColor = XPOD<ButtonColorType>

function buttonColorToClassName(color: ButtonColorType): string {
    if (color === 'default') {
        return ''
    } else {
        return `btn-${color}`
    }
}

export type ButtonStatusType = 'default' | 'info' | 'success' | 'warning' | 'error'
export type ButtonStatus = XPOD<ButtonStatusType>
export const ButtonStatus = XPOD<ButtonStatusType>

function buttonStatusToClassName(status: ButtonStatusType): string {
    if (status === 'default') {
        return ''
    } else {
        return `btn-${status}`
    }
}

export class Button extends dom.ButtonCtor {

    color: ButtonColor = new ButtonColor('default')
    active: XBoolean = new XBoolean(false)
    status: ButtonStatus = new ButtonStatus('default')
    outlined: XBoolean = new XBoolean(false)

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
            this.removeClass(buttonColorToClassName(_.oldValue))
            this.addClass(buttonColorToClassName(_.newValue))
        })

        this.status.onChange.bind((_) => {
            this.removeClass(buttonStatusToClassName(_.oldValue))
            this.addClass(buttonStatusToClassName(_.newValue))
        })

        this.outlined.onChange.bind((_) => {
            if (_.newValue) {
                this.addClass('btn-outline')
            } else {
                this.removeClass('btn-outline')
            }
        })
    }
}
