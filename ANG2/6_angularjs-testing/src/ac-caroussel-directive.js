angular.module('app')
    .directive('acCaroussel', acCaroussel);

function acCaroussel() {
    const alertStyles = ['alert-danger', 'alert-info', 'alert-warning', 'alert-success'];

    return {
        restrict: 'E',
        template: '<h4 class="alert alert-success" style="cursor: pointer"></h4>',
        replace: true,
        controller,
        link
    };

    function controller() {
        let counter = 0;

        this.update = () => alertStyles[++counter % alertStyles.length];
    }

    function link(scope, iElement, iAttributes, acCarousselController) {
        iElement.text(iAttributes.acCarousselMessage || 'Default message!');

        iElement.on('click', () => {
            iElement.attr('class', `alert ${acCarousselController.update()}`);
        });
    }
}
