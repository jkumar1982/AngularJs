function Calculator() {
    var operands = [];

    return {
        enter: enter,
        display: display,
        multiply: multiply
    };

    function enter(operand) {
        checkIsNumber(operand);

        push(operand);
    }

    function display() {
        return operands.length > 0 ? String(operands[0]) : '';
    }

    function multiply() {
        push(pop() * pop());
    }

    function checkIsNumber(value) {
        if (typeof value !== 'number') {
            throw new Error('Error: the operand is not a number: "' + value + '".')
        }
    }

    function push(operand) {
        operands.unshift(operand);
    }

    function pop() {
        if (operands.length === 0) {
            throw new Error('Error: no operands in the stack.');
        }

        return operands.shift();
    }
}
