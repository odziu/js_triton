// require('ts-node').register();

exports.config = {
      // seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://movies-finder.firebaseapp.com/',
    SELENIUM_PROMISE_MANAGER: false, // but we still use this piece of shit
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    chromeDriver: './node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
    specs: ['spec.js'],
    framework: 'jasmine2' ,
    onPrepare: function() {
        let jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
        );
        // Adding nice console output.
        // Provided by: https://github.com/razvanz/jasmine2-reporter
        let ConsoleReporter = require('jasmine2-reporter').Jasmine2Reporter;
        let console_reporter_options = {
            startingSpec: true
        };
        jasmine.getEnv().addReporter(new ConsoleReporter(console_reporter_options));
    }
};
