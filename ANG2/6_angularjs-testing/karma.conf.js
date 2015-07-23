module.exports = function (config) {
    config.set({
        basePath: 'src',
        frameworks: ['jasmine'],
        files: [
            '../node_modules/jquery/dist/jquery.js',
            '../node_modules/angular/angular.js',
            '../node_modules/angular-mocks/angular-mocks.js',
            '**/app.js',
            '**/*.js'
        ],
        browsers: ['Firefox'],
        reporters: ['dots', 'coverage'],
        preprocessors: {
            '**/*.js': ['babel'],
            '**/!(*spec).js': ['coverage']
        },
        coverageReporter: {
            dir: '../coverage/'
        }
    });
};
