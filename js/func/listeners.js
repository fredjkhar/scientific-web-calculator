const func_buttons = [
    ['\\sin','\\cos','\\tan','\\sin^{-1}','\\cos^{-1}','\\tan^{-1}','mean','stdev','stdevp','nPr','nCr','!'],
    ['a^b','\\sqrt{}', '\\sqrt[n]{}', 'e^x','abs','round','ln','log','icon','e','\\pi','\\hookleftarrow']
]


const func_section = [
    document.querySelector('.func--left'),
    document.querySelector('.func--right')
]

for (let i = 0; i < func_buttons.length; i++) {
    for (let button of func_buttons[i]) {
        let btn = document.createElement('button')
        if (button === 'icon') btn.innerHTML = '<img src="./assets/icons/delete.svg" alt="delete one character">'
        else btn.innerText = '$\\rm ' + button + '$'
        btn.setAttribute('class', 'btn btn--func')
        //btn.addEventListener('click', )
        func_section[i].appendChild(btn)
    }
}