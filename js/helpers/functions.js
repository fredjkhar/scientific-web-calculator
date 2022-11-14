function rebuild() {
    math_field.innerHTML = ''
    for (let element of eq.getEquation()) {
        math_field.appendChild(element)
    }
}