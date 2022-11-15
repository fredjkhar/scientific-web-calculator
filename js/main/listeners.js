

let left_arrow = document.querySelector('.left-arr')
left_arrow.style.backgroundColor = 'lightblue' // implemented
left_arrow.addEventListener('click', () => {
    if (!focused) {
        focus()
    } else {
        if (eq.getLength() > 1) {
            let bar = document.querySelector('.bar')
            let i = eq.indexOf(bar)
            if (i > 0) {
                eq.remove(bar)
                eq.add(bar, i - 1)
                rebuild()
            }
        } 
    }
})

let right_arrow = document.querySelector('.right-arr')
right_arrow.style.backgroundColor = 'lightblue' // implemented
right_arrow.addEventListener('click', () => {
    if (!focused) {
        focus()
    } else {
        if (eq.getLength() > 1) {
            let bar = document.querySelector('.bar')
            let i = eq.indexOf(bar)
            if (i > -1 && i < eq.getLength() - 1) {
                eq.remove(bar)
                eq.add(bar, i + 1)
                rebuild()
            }
        } 
    }
})

let delete_one_elem = document.querySelector('.delete')
delete_one_elem.style.backgroundColor = 'lightblue' // implemented
delete_one_elem.addEventListener('click', () => {
    if (!focused) {
        focus()
        let bar = document.querySelector('.bar')
        let i = eq.indexOf(bar)
        if (i > 0) {
            eq.pop()
            eq.pop()
            eq.push(bar)
            rebuild()
        }
    } else {
        if (eq.getLength() > 1) {
            let bar = document.querySelector('.bar')
            let i = eq.indexOf(bar)
            if (i > 0) {
                console.log(eq.indexAt(i - 1))
                eq.remove(eq.indexAt(i - 1))
                rebuild()
            }
        }
    }
})

document.querySelector('.digit-0').addEventListener('click', () => {
    let bar = document.createElement('span')
    bar.setAttribute('class','digit-0')
    bar.setAttribute('id', random_id())
    bar.innerText = '0'
    add(bar)
})

document.querySelector('.digit-1').addEventListener('click', () => {
    let bar = document.createElement('span')
    bar.setAttribute('class','digit-1')
    bar.setAttribute('id', random_id())
    bar.innerText = '1'
    add(bar)

})