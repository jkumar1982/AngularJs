module.exports = function (config) {
    config.set({
        basePath: 'app',
        frameworks: ['jasmine'],
        files: ['**/*.js'],
        browsers: ['Firefox'],
        reporters: ['dots']
    });
};
