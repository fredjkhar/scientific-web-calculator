class Equation {
    constructor() {
        this.equation = []
    }
    
    getEquation() {
        return [...this.equation]
    }

    getLength() {
        return this.equation.length
    }

    push(elem) {
        this.equation.push(elem)
    }
    
    pop() {
        if (!this.isEmpty()) return this.equation.pop()
    }
    
    peek() {
        if (!this.isEmpty()) return this.equation.peek()
    }

    remove(elem) {
        let i = this.equation.indexOf(elem)
        if (i > -1) this.equation.splice(i, 1)
    }

    add(elem, index) {
        if (!this.isEmpty() && typeof(index) == 'number' && index > -1 && index <= this.equation.length) {
            let equation = []
            for (let i = 0; i < index; i++) equation.push(this.equation.shift())
            equation.push(elem)
            while(!this.isEmpty()) equation.push(this.equation.shift())
            this.equation = equation
        }
    }

    indexOf(elem) {
        if (!this.isEmpty()) return this.equation.indexOf(elem)
        else return -1
    }

    indexAt(index) {
        if (!this.isEmpty() && typeof(index) == 'number' && index > -1 && index < this.equation.length) 
            return this.equation[index]
        else return undefined
    }

    isEmpty() {
        return this.equation.length == 0
    }
}
