const isbrowserOpen = false;
const nodeExternals = require('webpack-node-externals');

const {merge} = require('webpack-merge');
const webpackCommonConfig = require('../config.common');

module.exports = merge(webpackCommonConfig, {
    target: 'node',     // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    module: {
        rules: [],
    }
});
