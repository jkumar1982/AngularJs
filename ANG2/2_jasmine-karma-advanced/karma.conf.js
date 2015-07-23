module.exports = function (config) {
    config.set({
        basePath: 'src/app',
        frameworks: ['jasmine'],
        files: ['**/*.js'],
        browsers: ['Firefox'],
        reporters: ['dots'],
        preprocessors: {
            '**/*.js': ['babel']
        }
    });
};
