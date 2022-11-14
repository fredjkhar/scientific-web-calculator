const abc_buttons = [
    ['q','w','e','r','t','y','u','i','o','p'],
    ['a','s','d','f','g','h','j','k','l'],
    ['=','z','x','c','v','b','n','m',',','icon'],
    ['\\Uparrow','(',')','[',']','!','\'','\\pi','\\hookleftarrow']
]

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
        //btn.addEventListener('click', )
        abc_section[i].appendChild(btn)
    }
}