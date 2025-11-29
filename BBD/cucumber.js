const common = {
    require: [
        'features/step-definitions/*.js',
        'features/support/*.js'
    ],
    requireModule: [],
    format: [
        '@cucumber/pretty-formatter',
        'html:cucumber-report.html',
        'json:cucumber-report.json'
    ],
    formatOptions: {
        snippetInterface: 'async-await'
    },
    timeout: 120000,  // 2 minutes timeout
    publishQuiet: true
};

module.exports = {
    default: {
        ...common,
        tags: 'not @ignore',
        parallel: 2
    },
    smoke: {
        ...common,
        tags: '@smoke'
    },
    regression: {
        ...common,
        tags: '@regression'
    }
};