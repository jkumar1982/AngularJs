module.exports = function (config) {
    var webpackConfig = require('./webpack.config.js');

    config.set({
        basePath: 'src',
        frameworks: ['jasmine'],
        files: ['**/*.spec.js'],
        browsers: ['Firefox'],
        reporters: ['dots'],
        preprocessors: {
            '**/*.js': ['webpack']
        },
        webpack: {
            module: webpackConfig.module
        },
        webpackMiddleware: {
            noInfo: true
        }
    });
};
