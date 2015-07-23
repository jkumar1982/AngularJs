angular.module('app', [])
    .constant('formalGreeting', 'Hello')
    .constant('casualGreeting', 'Hi')
    .controller('GreeterController', GreeterController)
    .provider('greeterService', GreeterServiceProvider)
    .config(greeterServiceConfigurer)
    .config(logFunction('Config'))
    .run(logFunction('Run'));

console.log('Load');

angular.bootstrap(document.body, ['app']);

function greeterServiceConfigurer(greeterServiceProvider, casualGreeting) {
    if (params(location.search).mode === 'casual') {
        greeterServiceProvider.setGreeting(casualGreeting);
    }

    function params(parametersString) {
        return parametersString
            .slice(1)
            .split('&')
            .reduce(parseParam, {});

        function parseParam(parsedParams, param) {
            const [name, value] = param.split('=');

            parsedParams[name] = value;

            return parsedParams;
        }
    }
}

function GreeterController(greeterService) {
    this.name = 'AngularJS';

    this.greet = () => greeterService.greet(this.name);
}

function GreeterServiceProvider(formalGreeting) {
    let greeting = formalGreeting;

    this.setGreeting = (customGeeting) => {
        greeting = customGeeting;
    };

    this.$get = () => {
        return {
            greet: (name) => `${greeting} ${name}!`
        };
    };
}

function logFunction(message) {
    return () => {
        console.log(message);
    }
}
