const {merge} = require('webpack-merge');
const clientWebpackCommonConfig = require('../config.common');
const path = require('path');

module.exports = merge(clientWebpackCommonConfig, {
    mode: 'production',
    devtool: false,

    entry: {
        'client.prod.bundle': [path.resolve(__dirname, './../../../client/hydrateApp.jsx'), path.resolve(__dirname, './../../../client/styles/styles.scss')]
    },
    output: {
        path: path.resolve(__dirname, '../../../builds/prod.build'),
        filename: '[name].js',
    },
});
