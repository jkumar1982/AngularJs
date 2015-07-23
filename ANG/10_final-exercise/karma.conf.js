module.exports = function (config) {
    config.set({
        files: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',

            'bower_components/angular-mocks/angular-mocks.js',
            'test/util/test-utils.js',
            'test/util/custom-matchers.js',

            'app/**/*-module.js',
            'app/**/*.js'
        ],
        browsers: ['Firefox'],
        reporters: ['dots', 'coverage'],
        frameworks: ['jasmine'],
        preprocessors: {
            'app/**/!(*.spec).js': 'coverage'
        }
    });
};
