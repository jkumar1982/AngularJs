module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/app.js',
            'app/app.spec.js'
        ],
        browsers: ['Firefox'],
        reporters: ['dots'],
        singleRun: true
    });
};
