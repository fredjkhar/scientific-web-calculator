document.querySelector('.digit-0').addEventListener('click', () => {
    let bar = document.createElement('span')
    bar.setAttribute('class','digit-0')
    bar.innerText = '0'
    eq.push(bar);
    unfocus()
    focus()
    rebuild()
})