
/* row--top buttons */
const buttons = [
    document.getElementsByClassName('button--main')[0],
    document.getElementsByClassName('button--abc')[0],
    document.getElementsByClassName('button--func')[0]
]

const sections = [
    document.getElementsByClassName('main')[0],
    document.getElementsByClassName('abc')[0],
    document.getElementsByClassName('func')[0]
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

/* main--left buttons */
document.querySelector('.main--left :nth-child(1)').addEventListener('click', () => {
    pow_two()
})

document.querySelector('.main--left :nth-child(2)').addEventListener('click', () => {

})

document.querySelector('.main--left :nth-child(3)').addEventListener('click', () => {

})

document.querySelector('.main--left :nth-child(4)').addEventListener('click', () => {

})

document.querySelector('.main--left :nth-child(5)').addEventListener('click', () => {

})

document.querySelector('.main--left :nth-child(6)').addEventListener('click', () => {
   
})

document.querySelector('.main--left :nth-child(7)').addEventListener('click', () => {
   
})

document.querySelector('.main--left :nth-child(8)').addEventListener('click', () => {
   
})

document.querySelector('.main--left :nth-child(9)').addEventListener('click', () => {
   
})

document.querySelector('.main--left :nth-child(10)').addEventListener('click', () => {
   
})

document.querySelector('.main--left :nth-child(11)').addEventListener('click', () => {
   
})

document.querySelector('.main--left :nth-child(11)').addEventListener('click', () => {
   
})

/* main--middle buttons */
document.querySelector('.main--middle :nth-child(1)').addEventListener('click', () => {
    digit(7)
})

document.querySelector('.main--middle :nth-child(2)').addEventListener('click', () => {
    digit(8)
})

document.querySelector('.main--middle :nth-child(3)').addEventListener('click', () => {
    digit(9)
})

document.querySelector('.main--middle :nth-child(4)').addEventListener('click', () => {
   
})

document.querySelector('.main--middle :nth-child(5)').addEventListener('click', () => {
    digit(4)
})

document.querySelector('.main--middle :nth-child(6)').addEventListener('click', () => {
    digit(5)
})

document.querySelector('.main--middle :nth-child(7)').addEventListener('click', () => {
    digit(6)
})

document.querySelector('.main--middle :nth-child(8)').addEventListener('click', () => {
   
})

document.querySelector('.main--middle :nth-child(9)').addEventListener('click', () => {
    digit(1)
})

document.querySelector('.main--middle :nth-child(10)').addEventListener('click', () => {
    digit(2)
})

document.querySelector('.main--middle :nth-child(11)').addEventListener('click', () => {
    digit(3)
})

document.querySelector('.main--middle :nth-child(12)').addEventListener('click', () => {
   
})

document.querySelector('.main--middle :nth-child(13)').addEventListener('click', () => {
   
})

document.querySelector('.main--middle :nth-child(14)').addEventListener('click', () => {
    digit(0)
})

document.querySelector('.main--middle :nth-child(15)').addEventListener('click', () => {
   
})

document.querySelector('.main--middle :nth-child(16)').addEventListener('click', () => {
   
})

/* main--right buttons */
document.querySelector('.main--right :nth-child(1)').addEventListener('click', () => {
   
})

document.querySelector('.main--right :nth-child(2)').addEventListener('click', () => {
   
})

document.querySelector('.main--right :nth-child(3)').addEventListener('click', () => {
   
})

document.querySelector('.main--right :nth-child(4)').addEventListener('click', () => {
   
})

document.querySelector('.main--right :nth-child(5)').addEventListener('click', () => {
   delete_last_element()
})

document.querySelector('.main--right :nth-child(6)').addEventListener('click', () => {
   
})





