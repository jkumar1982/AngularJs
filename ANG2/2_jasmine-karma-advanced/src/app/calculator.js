class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.unshift(item);
    }

    pop() {
        if (this.items.length === 0) {
            throw new Error('Error, no items in the stack.');
        }

        return this.items.shift();
    }

    top() {
        return this.items[0];
    }
}

class Calculator {
    constructor(stack) {
        this.operands = stack || new Stack();
    }

    enter(operand) {
        checkIsNumber(operand);

        this.operands.push(operand);
    }

    display() {
        const top = this.operands.top();

        return  top ? String(top) : '';
    }

    multiply() {
        this.operands.push(this.operands.pop() * this.operands.pop());
    }
}

var checkIsNumber = (value) => {
    if (typeof value !== 'number') {
        throw new Error(`Error, the operand is not a number: "${value}".`)
    }
};
