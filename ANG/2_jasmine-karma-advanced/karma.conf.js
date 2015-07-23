module.exports = function (config) {
    config.set({
        basePath: 'app',
        frameworks: ['jasmine'],
        files: ['**/*.js'],
        browsers: ['Firefox'],
        reporters: ['dots', 'coverage'],
        preprocessors: {
            '**/!(*spec).js': ['coverage']
        },
        coverageReporter: {
            dir: "../coverage/"
        }
    });
};
