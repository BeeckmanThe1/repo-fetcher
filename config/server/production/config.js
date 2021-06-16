const {merge} = require('webpack-merge');
const serverWebpackCommonConfig = require('../config.common');
const path = require('path');

module.exports = merge(serverWebpackCommonConfig, {
    mode: 'production',
    devtool: false,
    entry: path.resolve(__dirname, '../../../server/app.js'),
    output: {
        path: path.resolve(__dirname, '../../../builds/prod.build'),
        filename: 'server.prod.bundle.js',
    }
});
