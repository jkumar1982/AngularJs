angular.module('core')
    .directive('acNavigationBar', acNavigationBar);

const template = `
        <div class="navbar navbar-inverse" role="navigation">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li ng-repeat="navigationItem in navigationController.navigationItems">
                        <a ng-href="{{navigationItem.url}}" translate="{{navigationItem.label}}"></a>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right" ng-transclude></ul>
            </div>
        </div>`;

function acNavigationBar() {
    return {
        template,
        controller: NavigationBarController,
        controllerAs: 'navigationController',
        transclude: true
    };

    function NavigationBarController(navigationBarService) {
        navigationBarService().then((navigationItems) => {
            this.navigationItems = navigationItems;
        });
    }
}
