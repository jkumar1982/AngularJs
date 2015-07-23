angular.module('app')
    .controller('ApplicationController', ApplicationController);

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
