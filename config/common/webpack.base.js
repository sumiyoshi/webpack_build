const path = require('path')
module.exports = {
    output: {
        filename: '[name].bundle.js'
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            [
                                "@babel/preset-env", {
                                "targets":
                                    {
                                        "browsers": [
                                            "Chrome >= 80",
                                            "FireFox >= 80",
                                            "Safari >= 14",
                                            "Explorer 11",
                                            "last 4 Edge versions"
                                        ]
                                    },
                                "useBuiltIns": "usage",
                                // usageのときは指定が必須
                                "corejs": 3,
                                // ポリフィルなどの情報が出力される
                                // "debug": true
                            }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    //設定ファイルを分割するので、build-tools直下にベースのパスは固定
    context: path.resolve(__dirname, '../../')
};