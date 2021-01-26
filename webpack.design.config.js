const merge = require('webpack-merge');
const common = require('./config/webpack.common');

const path = require('path');
const basePath = path.resolve(__dirname, '../public/bundle/design');

const entries = {};
const srcDir = './src/'
const glob = require("glob");
glob.sync('**/*.js', {
    cwd: srcDir
}).map((value) => {
    entries[value] = path.resolve(srcDir, value);
});

module.exports = merge(common);
module.exports = merge(module.exports, {
    output: {
        path: basePath
    },
    entry: entries
})
