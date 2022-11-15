


/*
let sup = false
function process(str, operation) {
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
    }
}

function pow_n() {
    if (equation.length != 0) {
        sup = true
    }
}

function abs() {
    default_operation('|', 'abs') 
}

function sqrt() {}

function nrt() {}

function pi() {
    default_operation('𝜋', 'pi') 
}

function sin() {
    default_operation('sin(', 'sin') 
}

function cos() {
    default_operation('cos(', 'cos') 
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

function default_operation(str, op) {
    let type = sup ? 'sup' : 'span'
    let e = document.createElement(type)
    e.setAttribute('class', op + (type === 'sup' ? ' superscript' : ''))
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

function superscript(n = 2, op) {
    let s = document.createElement('sup')
    s.setAttribute('class', 'superscript' + (typeof(op) === 'undefined' ? '' : ' ' + op)) 
    s.innerText = n
    equation.push(s)
    rebuild_equation()
}
*/
/*
function focused(cond) {
    let bar = document.querySelector('.vertical-bar')
    console.log(bar)
    if (!cond && typeof(bar) !== 'null') {
        const i = equation.indexOf(bar)
        equation.splice(i,1)
        rebuild_equation()
    } else if (typeof(bar) === 'null') {
        bar = document.createElement('span')
        bar.setAttribute('class','vertical-bar')
        equation.push(bar)
        rebuild_equation()
    }

}
*/



