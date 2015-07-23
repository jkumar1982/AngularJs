angular.module('app', [])
    .controller('ApplicationController', ApplicationController)
    .directive('acAlert', acAlert)
    .directive('acCaroussel', acCaroussel);

function ApplicationController() {
    const translatedStyles = {
        'error': 'alert-danger',
        'info': 'alert-info',
        'warning': 'alert-warning',
        'ok': 'alert-success'
    };

    this.alertCategories = [
        {id: 'alert-success', label: 'Success'},
        {id: 'alert-info', label: 'Info'},
        {id: 'alert-warning', label: 'Warning'},
        {id: 'alert-danger', label: 'Danger'}
    ];

    this.alertStyle = '';

    this.updateChangeStyle = () => {
        this.changeStyle = translatedStyles[this.alertStyle];
    };
}

function acAlert() {
    return {
        restrict: 'A',
        link
    };

    function link(scope, iElement) {
        iElement
            .css('cursor', 'pointer')
            .on('click', () => {
                alert(iElement.text());
            });
    }
}

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

angular.bootstrap(document.body, ['app']);
