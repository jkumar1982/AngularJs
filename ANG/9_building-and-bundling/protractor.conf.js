exports.config = {
    chromeOnly: true,

    baseUrl: 'http://localhost:3000',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: [
        'test/util/jasmine-matchers.js',
        'test/e2e/**/*.spec.js'
    ],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000
    }
};
