describe('ApplicationController', () => {
    let applicationController;

    beforeEach(module('app'));

    beforeEach(inject(function ($controller) {
        applicationController = $controller('ApplicationController')
    }));

    it('should have alertCategories property with 4 items', () => {
        expect(applicationController.alertCategories.length).toBe(4);
    });

    it('should initialize alertStyle with empty string', () => {
        expect(applicationController.alertStyle).toBe('');
    });

    it('should initialize changeStyle as undefined', () => {
        expect(applicationController.changeStyle).toBeUndefined();
    });

    it('should set changeStyle with translated style', () => {
        applicationController.alertStyle = 'ok';

        applicationController.updateChangeStyle();

        expect(applicationController.changeStyle).toBe('alert-success');
    });

    it('should set changeStyle with undefined when no translated style exist', () => {
        applicationController.alertStyle = 'foo';

        applicationController.updateChangeStyle();

        expect(applicationController.changeStyle).toBeUndefined();
    });
});
