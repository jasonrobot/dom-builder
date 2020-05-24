const path = require('path');

module.exports = {
    mode: "development",

    entry: path.resolve(__dirname, './test/domfu.test.js'),

    // output: {
    //     path: path.resolve(__dirname, '../dist'),
    // },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'inline-source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js"],
    },

    module: {
        rules: [
            // All output '.js' files will have any sourcemaps re-processed by
            // 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            }
        ]
    },
    externals: [
        'chai',
        'mocha',
    ],
};