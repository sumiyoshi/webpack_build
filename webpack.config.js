const merge = require('webpack-merge');
const common = require('./config/webpack.common');
// const jquery = require('./config/webpack.jquery');
// module.exports = merge(common, jquery);

const path = require('path');
const base_path = path.resolve(__dirname, '../public/bundle');


module.exports = merge(common, {
    output: {
        path: base_path
    },
    entry: {
        common: [
            '../src/common/common.js',
        ],
        app: [
            '../src/app.js',
        ],
        app_es6: [
            '../src/app.es6.js'
        ],
        app_vue: [
            '../src/vue/app.js'
        ]
    }
})
