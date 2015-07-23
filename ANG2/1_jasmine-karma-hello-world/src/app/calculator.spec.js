describe('Calculator', () => {
    var calculator;

    beforeEach(() => calculator = new Calculator());

    it('must display an empty result when there are no operands in the stack', () => {
        expect(calculator.display()).toBe('');
    });

    it('must throw an error when the operand entered is not a number', () => {
        [undefined, null, 'string', [], {}, () => undefined].forEach((value) => {
            expect(() => calculator.enter(value)).toThrowError(`Error, the operand is not a number: "${value}".`);
        });
    });

    it('must display the last operand of the stack', () => {
        // Arrange
        calculator.enter(6);
        calculator.enter(7);

        // Act
        var result = calculator.display();

        // Assert
        expect(result).toBe('7');
    });

    it('must throw an error when there are not enough operands', () => {
        expect(() => calculator.multiply()).toThrowError('Error, no operands in the stack.');

        calculator.enter(1);

        expect(() => calculator.multiply()).toThrowError('Error, no operands in the stack.');
    });

    it('must multiply the last two operands and display the result', () => {
        calculator.enter(6);
        calculator.enter(7);

        calculator.multiply();

        expect(calculator.display()).toBe('42');
    });
});
