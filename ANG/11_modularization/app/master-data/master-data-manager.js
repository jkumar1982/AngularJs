module.exports = function (masterDataCache, $rootScope, $route) {
    var deregister;

    return {
        start: start,
        stop: stop
    };

    function start() {
        deregister = $rootScope.$on('language.changed', function () {
            masterDataCache.removeAll();
            $route.reload();
        });
    }

    function stop() {
        if (deregister) {
            deregister();
        }
    }
};