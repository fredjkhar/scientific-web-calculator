function rebuild() {
    math_field.innerHTML = ''
    for (let elem of eq.getEquation()) {
        math_field.appendChild(elem)
    }
}

function add(elem) {
    if (!focused) {
        eq.push(elem)
        rebuild()
        focus()
    } else {
        let bar = document.querySelector('.bar')
        let i = eq.indexOf(bar)
        eq.add(elem, i)
        rebuild()
    }
}

function random_id() {
    return Math.floor(Math.random() * Math.pow(10,4))
}