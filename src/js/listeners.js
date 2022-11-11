
/* row--top buttons */
const buttons = [
    document.querySelector('.button--main'),
    document.querySelector('.button--abc'),
    document.querySelector('.button--func')
]
const sections = [
    document.querySelector('.main'),
    document.querySelector('.abc'),
    document.querySelector('.func')
]

for (let button of buttons) {
    button.addEventListener('click', (event) => {
        switch (event.target) {
            case buttons[0]:
                buttons[1].classList.remove('current')
                buttons[2].classList.remove('current')
                buttons[0].classList.add('current')

                sections[1].style.display = 'none'
                sections[2].style.display = 'none'
                sections[0].style.display = 'grid'
                break
            case buttons[1]:
                buttons[0].classList.remove('current')
                buttons[2].classList.remove('current')
                buttons[1].classList.add('current')

                sections[0].style.display = 'none'
                sections[2].style.display = 'none'
                sections[1].style.display = 'grid'
                break
            case buttons[2]:
                buttons[0].classList.remove('current')
                buttons[1].classList.remove('current')
                buttons[2].classList.add('current')

                sections[0].style.display = 'none'
                sections[1].style.display = 'none'
                sections[2].style.display = 'grid'
                break           
        }
    })
}

const main_section = [
    document.querySelector('.main--left'),
    document.querySelector('.main--middle'),
    document.querySelector('.main--right')
]

for (let i = 0; i < main_buttons.length; i++) {
    for (let button of main_buttons[i]) {
        let btn = document.createElement('button')
        btn.setAttribute('class', 'btn btn--main ' + button.op)
        if (button.op === 'delete') btn.innerHTML = button.str
        else btn.innerText = button.str
        btn.addEventListener('click', () => { process(button.str, button.op) })
        main_section[i].appendChild(btn)
    }
}

const abc_section = [
    document.querySelector('.abc--top'),
    document.querySelector('.abc--upper-middle'),
    document.querySelector('.abc--lower-middle'),
    document.querySelector('.abc--bottom')
]

for (let i = 0; i < abc_buttons.length; i++) {
    for (let button of abc_buttons[i]) {
        let btn = document.createElement('button')
        if (button === 'icon') btn.innerHTML = '<img src="./assets/icons/delete.svg" alt="delete one character">'
        else btn.innerText = '$\\rm ' + button + '$'
        btn.setAttribute('class', 'btn btn--abc')
        btn.addEventListener('click', process())
        abc_section[i].appendChild(btn)
    }
}

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
        btn.addEventListener('click', process())
        func_section[i].appendChild(btn)
    }
}

    
