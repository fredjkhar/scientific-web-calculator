document.addEventListener('DOMContentLoaded', function() {
    renderMathInElement(document.body, {
    delimiters: [
        {left: '$', right: '$', display: false},
    ],
    throwOnError : false
    }) 
})

var eq = new Equation()
var math_field = document.querySelector('.math-field')





