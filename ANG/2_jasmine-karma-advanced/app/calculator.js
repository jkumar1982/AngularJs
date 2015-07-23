function Stack() {
    var items = [];

    return {
        push: push,
        pop: pop,
        top: top
    };

    function push(item) {
        items.unshift(item);
    }

    function pop() {
        if (items.length === 0) {
            throw new Error('Error: no items in the stack.');
        }

        return items.shift();
    }

    function top() {
        return items.length > 0 ? items[0] : undefined;
    }
}

function Calculator(stack) {
    stack = stack || new Stack();

    return {
        enter: enter,
        display: display,
        multiply: multiply
    };

    function enter(operand) {
        checkIsNumber(operand);

        stack.push(operand);
    }

    function display() {
        var top = stack.top();

        return top ? String(top) : '';
    }

    function multiply() {
        stack.push(stack.pop() * stack.pop());
    }

    function checkIsNumber(value) {
        if (typeof value !== 'number') {
            throw new Error('Error: the operand is not a number: "' + value + '".')
        }
    }
}
