const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    devServer: {
        contentBase: './game'
    },
    devtool: 'inline-source-map',

    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    resolve: {
        modules: [
            "node_modules"
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};

