let equation = []
let math_field = document.querySelector('.math-field')


function rebuild_equation() {
    math_field.innerHTML = ''

    for (element of equation) {
        math_field.appendChild(element)
    }
    
}

function digit(d) {
    let digit = document.createElement('span')
    digit.setAttribute('class', 'digit')
    digit.innerText = d

    equation.push(digit)
    rebuild_equation()
}

function pow_two() {
    if (equation.length == 0) {
        digit(2)
    }
    else {
        let pow_superscript = document.createElement('span')
        pow_superscript.setAttribute('class', 'superscript')
        pow_superscript.innerText = 2

        equation.push(pow_superscript)
        rebuild_equation()

    }
}

function delete_last_element() {
    equation.pop()
    rebuild_equation()
}