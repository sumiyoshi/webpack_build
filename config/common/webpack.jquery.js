const webpack = require('webpack');

module.exports = {
    entry: {
    },
    plugins: [
        //指定した変数名で利用できるようにする
        new webpack.ProvidePlugin({
            $: './vendor/jquery.min.js',
            jQuery: './vendor/jquery.min.js',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /jquery.min.js$/,
                    name: 'jquery',
                    chunks: 'all'
                }
            }
        }
    }
};