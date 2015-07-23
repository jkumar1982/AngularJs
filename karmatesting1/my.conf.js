module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',
    frameworks: ['jasmine'],
    files: [
      'angular/angular.min.js',
      'angular/angular-route.js',
      'angular/angular-mocks.js',
      'app/*.js',
      'test/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};