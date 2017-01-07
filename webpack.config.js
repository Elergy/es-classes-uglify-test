const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: './out.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                props: true
            }
        })
    ]
};