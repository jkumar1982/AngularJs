describe('Stack', function () {
    var stack;

    beforeEach(function () {
        stack = Stack();
    });

    describe('top method', function () {
        it('must return undefined as top item when the stack is empty', function () {
            expect(stack.top()).toBeUndefined();
        });

        it('must return the last pushed item as top item', function () {
            stack.push(6);
            stack.push(7);

            expect(stack.top()).toBe(7);
        });
    });

    describe('pop method', function () {
        it('must throw and exception when the stack is empty', function () {
            expect(stack.pop).toThrow('Error: no items in the stack.');
        });

        it('must remove the top item in the stack and return it', function () {
            stack.push(6);
            stack.push(7);

            expect(stack.pop()).toBe(7);
            expect(stack.top()).toBe(6);
        });
    });
});

describe('Calculator', function () {

    describe('display method', function () {
        var calculator, stack;

        beforeEach(function () {
            stack = jasmine.createSpyObj('stack', ['top']);
            calculator = new Calculator(stack);
        });

        it('must return an empty string when there are no operands in the stack', function () {
            stack.top.andReturn(undefined);

            expect(calculator.display()).toBe('');
        });

        it('must return the top operand of the stack as a string', function () {
            stack.top.andReturn(42);

            expect(calculator.display()).toBe('42');
        });
    });

    describe('enter method', function () {
        var calculator, stack;

        beforeEach(function () {
            stack = jasmine.createSpyObj('stack', ['push']);
            calculator = new Calculator(stack);
        });

        it('must throw an error when the operand passed is not a number', function () {
            [undefined, null, 'string', [], {}, function () {
            }].forEach(function (value) {
                    expect(function () {
                        calculator.enter(value);
                    }).toThrow('Error: the operand is not a number: "' + value + '".');
                });
        });

        it('must push the operand in the stack', function () {
            calculator.enter(6);

            expect(stack.push).toHaveBeenCalledWith(6);
            expect(stack.push.callCount).toBe(1);
        });
    });

    describe('multiply method', function () {
        var calculator, stack;

        beforeEach(function () {
            stack = new Stack();
            calculator = new Calculator(stack);
        });

        beforeEach(function () {
            this.addMatchers({
                toHaveBeenCalledOnceWith: function (expected) {
                    var toHaveBeenCalledWith = jasmine.Matchers.prototype.toHaveBeenCalledWith;
                    this.message = function () {
                        return 'Expected spy to have been called once with '+ expected + ' but was called: ' + this.actual.callCount + ' time(s) with [' + this.actual.argsForCall + '].';
                    };

                    return this.actual.callCount === 1 && toHaveBeenCalledWith.call(this, expected);
                }
            });
        });

        it('must pop two operands from the stack and push their multiplication back', function () {
            stack.push(6);
            stack.push(7);
            spyOn(stack, ['pop']).andCallThrough();
            spyOn(stack, ['push']);

            calculator.multiply();

            expect(stack.pop.callCount).toBe(2);
            expect(stack.push).toHaveBeenCalledOnceWith(42);
        });
    });
});
