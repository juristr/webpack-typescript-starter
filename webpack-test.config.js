const path = require('path');
const webpack = require('webpack');

const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

module.exports = {
    context: ROOT,

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    module: {
        rules: [
            // PRE-LOADERS
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },

            // LOADERS
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                loader: 'awesome-typescript-loader'
            }
        ]
    },

    devtool: 'cheap-module-source-map',
    devServer: {}
};

