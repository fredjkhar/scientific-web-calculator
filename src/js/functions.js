let equation = []
let math_field = document.querySelector('.math-field')

function process(str = '', operation) {
    if (operation !== undefined) {
        switch (operation) {
            case 'pow2':
                pow_two()
                break
            case 'pown':
                pow_n()
                break
            case 'abs':
                abs()
                break
            case 'sqrt':
                sqrt()
                break
            case 'nrt':
                nrt()
                break
            case 'pi':
                pi()
                break
            case 'sin':
                sin()
                break
            case 'cos':
                cos()
                break
            case 'tan':
                tan()
                break
            case 'divide':
                div()
                break
            case 'answer':
                answer()
                break
            case 'mod':
                mod()
                break
            case 'frac':
                frac()
                break
            case 'leftarrow':
                arrow('left')
                break
            case 'rightarrow':
                arrow('right')
                break
            case 'delete':
                delete_last_el()
                break
            case 'hookleftarrow':
                arrow('hookleft')
                break
            default:
                default_operation(str, operation)
        }    
    }
}

function pow_two() {
    if (equation.length == 0) {
        default_operation('2', 'digit')
    } else {
        superscript(2)
        rebuild_equation()
    }
}

function pow_n() {
    /*
    if (equation.length != 0) {
        let last_element = equation[equation.length - 1]
        if (last_element.className === "digit") {
            if (waiting_ops.length == 0) {
                waiting_ops.push(pow_n)
                rebuild_equation()   
            }
        }
    }
    */

}

function abs() {
    default_operation('|', 'tan') 
}

function sqrt() {}

function nrt() {}

function pi() {
    default_operation('𝜋', 'tan') 
}

function sin() {
    default_operation('sin(', 'tan') 
}

function cos() {
    default_operation('cos(', 'tan') 
}

function tan() {
    default_operation('tan(', 'tan') 
}

function div() {}

function answer() {}

function mod() {}

function frac() {}

function arrow(direction) {}

function delete_last_el() {
    equation.pop()
    rebuild_equation()
}

function default_operation(str, operation) {
    let e = document.createElement('span')
    e.setAttribute('class', operation)
    e.innerText = str

    equation.push(e)
    rebuild_equation()
}

function rebuild_equation() {
    math_field.innerHTML = ''

    for (let element of equation) {
        math_field.appendChild(element)
    }
}

function superscript(n = 2) {
    let pow_superscript = document.createElement('span')
    pow_superscript.setAttribute('class', 'superscript')
    pow_superscript.innerText = n
    equation.push(pow_superscript)
}



