angular.module('core')
    .factory('navigationService', function ($q) {
        var navigationLinks = [
            {
                route: '/',
                label: 'HOME'
            },
            {
                route: '/search',
                label: 'SEARCH'
            }
        ];

        return {
            get: function () {
                return $q.when(navigationLinks);
            }
        };
    });
