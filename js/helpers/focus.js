let focused = false

const focus_elements = [
    document.querySelector('header'),
    document.querySelector('main'),
    document.querySelector('footer'),
    document.querySelector('.section--top')
]
let middle_section = document.querySelector('.section--middle')
document.addEventListener('click', (event) => {

    if (focus_elements.includes(event.target)) unfocus()
    else if (!document.querySelector('.section--bottom').contains(event.target)) focus()
})


function focus() {
    if (!focused) {
        focused = true
        middle_section.classList.add('focused')
        eq.push(construct_bar())
        rebuild()
    }
}

function unfocus() {
    if (focused) {
        focused = false
        middle_section.classList.remove('focused')
        eq.remove(document.querySelector('.bar'))
        rebuild()
    }

}

function construct_bar() {
    let bar = document.createElement('span')
    bar.setAttribute('class','bar blink')
    bar.style.height = '100%'
    bar.style.width = '1px'
    bar.style.backgroundColor = 'black'
    return bar
}
