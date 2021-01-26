const merge = require('webpack-merge');
const base = require('./config/common/webpack.base');
// const jquery = require('./config/common/webpack.jquery');

const path = require('path');
const base_path = path.resolve(__dirname, '../public/bundle');

//共通の設定をマージ
module.exports = merge(base, {
    output: {
        path: base_path
    }
})

// 個別の設定ファイルをマージ
const glob = require("glob");
glob.sync('./config/default/**/*.config.js').map((value) => {
    module.exports = merge(module.exports, require(value));
})