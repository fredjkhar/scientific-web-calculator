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





    