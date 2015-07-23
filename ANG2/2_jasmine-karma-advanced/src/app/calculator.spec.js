describe('Stack', () => {
    var stack;

    beforeEach(() => stack = new Stack());

    describe('push method', () => {
        it('must add an item to an empty stack', () => {
            expect(stack.top()).toBeUndefined();

            stack.push(6);

            expect(stack.top()).toBe(6);
        });
    });

    describe('pop method', () => {
        it('must throw and exception when the stack is empty', () => {
            expect(() => stack.pop()).toThrowError('Error, no items in the stack.');
        });

        it('must remove the top item in the stack and return it', () => {
            stack.push(6);
            stack.push(7);

            expect(stack.pop()).toBe(7);
            expect(stack.top()).toBe(6);
        });
    });

    describe('top method', () => {
        it('must return undefined as top item when the stack is empty', () => {
            expect(stack.top()).toBeUndefined();
        });

        it('must return the last pushed item as top item', () => {
            stack.push(6);
            stack.push(7);

            expect(stack.top()).toBe(7);
        });
    });
});

describe('Calculator', () => {

    describe('display method', () => {
        var calculator, stack;

        beforeEach(() => {
            stack = jasmine.createSpyObj('stack', ['top']);
            calculator = new Calculator(stack);
        });

        it('must return an empty string when there are no operands in the stack', () => {
            stack.top.and.returnValue(undefined);

            expect(calculator.display()).toBe('');
        });

        it('must return the top operand of the stack as a string', () => {
            stack.top.and.returnValue(42);

            expect(calculator.display()).toBe('42');
        });
    });

    describe('enter method', () => {
        var calculator, stack;

        beforeEach(() => {
            stack = jasmine.createSpyObj('stack', ['push']);
            calculator = new Calculator(stack);
        });

        it('must throw an error when the operand passed is not a number', () => {
            [undefined, null, 'string', [], {}, () => undefined].forEach(function (value) {
                expect(() => calculator.enter(value)).toThrowError('Error, the operand is not a number: "' + value + '".');
            });
        });

        it('must push the operand in the stack', () => {
            calculator.enter(6);

            expect(stack.push).toHaveBeenCalledWith(6);
            expect(stack.push.calls.count()).toBe(1);
        });
    });

    describe('multiply method', () => {
        var calculator, stack;

        beforeEach(() => {
            stack = new Stack();
            calculator = new Calculator(stack);
        });

        beforeEach(() => {
            jasmine.addMatchers({
                toHaveBeenCalledOnceWith: () => {
                    return {
                        compare: (actual, expected) => {
                            expect(actual).toHaveBeenCalledWith(expected);

                            return {
                                pass: actual.calls.count() === 1,
                                message: `Expected spy to have been called once with ${expected} but was called: ${actual.calls.count()} time(s) with [${actual.calls.allArgs()}].`
                            };
                        }
                    };
                }
            });
        });

        it('must pop two operands from the stack and push their multiplication back', () => {
            stack.push(6);
            stack.push(7);
            spyOn(stack, ['pop']).and.callThrough();
            spyOn(stack, ['push']);

            calculator.multiply();

            expect(stack.pop.calls.count()).toBe(2);
            expect(stack.push).toHaveBeenCalledOnceWith(42);
        });
    });
});
