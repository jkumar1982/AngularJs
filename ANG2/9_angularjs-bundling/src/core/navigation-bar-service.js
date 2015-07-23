export default function navigationBarService($q, $route) {
    const navigationItems = extractRoutes($route.routes)
        .filter((route) => route.label)
        .sort((route1, route2) => route1.order > route2.order)
        .map(parseRoute);

    return function () {
        return $q.when(navigationItems);
    };

    function extractRoutes(routesObject) {
        return Object.keys(routesObject).map((routeKey) => routesObject[routeKey]);
    }

    function parseRoute(route) {
        return {
            label: route.label,
            url: `#${route.path || route.originalPath}`
        };
    }
}
