class Calculator {
    constructor() {
        this.operands = [];
    }

    enter(operand) {
        checkIsNumber(operand);

        push(operand, this.operands);
    }

    display() {
        return this.operands.length > 0 ? String(this.operands[0]) : '';
    }

    multiply() {
        push(pop(this.operands) * pop(this.operands), this.operands);
    }
}

var checkIsNumber = (value) => {
    if (typeof value !== 'number') {
        throw new Error(`Error, the operand is not a number: "${value}".`)
    }
};

var push = (operand, operands) => {
    operands.unshift(operand);
};

var pop = (operands) => {
    if (operands.length === 0) {
        throw new Error('Error, no operands in the stack.');
    }

    return operands.shift();
};
