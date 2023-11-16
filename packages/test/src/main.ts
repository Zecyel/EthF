import * as daisyui from '@ethf/daisyui'

let btn = new daisyui.Button()
btn.textContent.value = 'Hello World'
// btn.color.value = 'primary'
btn.onClick.bind((_) => {
    btn.status.value = 'success'
    btn.outlined.value = true
    console.log("123")
})

document.getElementById('root').appendChild(btn.el)
