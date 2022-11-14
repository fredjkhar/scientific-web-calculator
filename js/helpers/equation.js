class Equation {
    constructor() {
        this.equation = []
    }
    
    getEquation() {
        return [...this.equation]
    }

    push(elem) {
        this.equation.push(elem)
    }
    
    pop() {
        if (!isEmpty()) this.equation.pop()
        else return new Error('Array is empty')
    }
    
    peek() {
        if (!isEmpty()) return this.equation.peek()
        else return new Error('Array is empty')
    }

    remove(elem) {
        let i = this.equation.indexOf(elem)
        if (i > -1) this.equation.splice(i, 1)
        else throw new Error('Error when removing element')
    }

    indexOf(elem) {
        if (!isEmpty()) return elem.indexOf(elem)
        else return -1
    }

    isEmpty() {
        return equation.length == 0
    }
}
