const merge = require('webpack-merge');
const base = require('./config/common/webpack.base');

const path = require('path');
const basePath = path.resolve(__dirname, '../public/design');

const entries = {};
const srcDir = '../src/'
const glob = require("glob");
glob.sync('**/*.js', {
    cwd: srcDir,
    ignore: ['vendor/*.js']
}).map((value) => {
    entries[value.replace(/.js/, '')] = path.resolve(srcDir, value);
});

module.exports = merge(base);
module.exports = merge(module.exports, {
    output: {
        path: basePath
    },
    entry: entries
})
