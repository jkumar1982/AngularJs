import TestController from './test-controller.js';

describe('TestController', () => {
    const testController = new TestController();

    describe('initialization', () => {
        it('should initialize the name and the greeting', () => {
            expect(testController.name).toBe('AngularJS');
            expect(testController.greeting).toBe('Hello AngularJS!');
        });
    });

    describe('greet() method', () => {
        it('should update the greeting', () => {
            testController.name = 'foo';

            testController.greet();

            expect(testController.greeting).toBe('Hello foo!');
        });
    });
});
