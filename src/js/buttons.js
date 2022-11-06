const main_buttons = [
    'a^2', 'a^b', '|a|','\\sqrt{}', '\\sqrt[n]{}', '\\pi','\\sin', '\\cos', '\\tan', '(', ')', ',', '7', '8', '9',
    '\\div', '4', '5', '6', '\\times', '1', '2', '3', '-', '.', '0', 'ans', '+', 'mod', '\\frac{a}{b}', '\\leftarrow',
    '\\rightarrow', 'icon', '\\hookleftarrow'
]

const main_section = [
    document.getElementsByClassName('main--left')[0],
    document.getElementsByClassName('main--middle')[0],
    document.getElementsByClassName('main--right')[0]
]

for (let i = 0; i < main_buttons.length; i++) {
    const btn = document.createElement('button')

    if (main_buttons[i] === 'icon') btn.innerHTML = '<img src="./assets/icons/delete.svg" alt="delete char">'
    else btn.innerText = '$\\rm ' + main_buttons[i] + '$'
    
    btn.setAttribute('class', 'btn btn--main')
    if (i < 12) main_section[0].appendChild(btn)
    else if (i < 28) main_section[1].appendChild(btn)
    else main_section[2].appendChild(btn)
}

const abc_buttons = [
    'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','=','z','x','c','v','b','n','m',',',
    'icon','\\Uparrow','(',')','[',']','!','\'','\\pi','\\hookleftarrow',
]

const abc_section = [
    document.getElementsByClassName('abc--top')[0],
    document.getElementsByClassName('abc--upper-middle')[0],
    document.getElementsByClassName('abc--lower-middle')[0],
    document.getElementsByClassName('abc--bottom')[0]
]

for (let i = 0; i < abc_buttons.length; i++) {
    const btn = document.createElement('button')

    if (abc_buttons[i] === 'icon') btn.innerHTML = '<img src="./assets/icons/delete.svg" alt="delete one character">'
    else btn.innerText = '$\\rm ' + abc_buttons[i] + '$'
    btn.setAttribute('class', 'btn btn--abc')

    if (i < 10) abc_section[0].appendChild(btn)
    else if (i < 19) abc_section[1].appendChild(btn)
    else if (i < 29) abc_section[2].appendChild(btn)
    else abc_section[3].appendChild(btn)
}

const func_buttons = [
    '\\sin','\\cos','\\tan','\\sin^{-1}','\\cos^{-1}','\\tan^{-1}','mean','stdev','stdevp','nPr','nCr','!','a^b',
    '\\sqrt{}', '\\sqrt[n]{}', 'e^x','abs','round','ln','log','icon','e','\\pi','\\hookleftarrow',
]

const func_section = [
    document.getElementsByClassName('func--left')[0],
    document.getElementsByClassName('func--right')[0]
]

for (let i = 0; i < func_buttons.length; i++) {
    const btn = document.createElement('button')

    if (func_buttons[i] === 'icon') btn.innerHTML = '<img src="./assets/icons/delete.svg" alt="delete one character">'
    else btn.innerText = '$\\rm ' + func_buttons[i] + '$'
    btn.setAttribute('class', 'btn btn--func')

    if (i < 12) func_section[0].appendChild(btn)
    else func_section[1].appendChild(btn)
}