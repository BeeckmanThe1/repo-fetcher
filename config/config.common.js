const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: [/\.(js|jsx)$/],
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ],
    },
    plugins: [new ESLintPlugin({extensions: ['js', 'jsx']})]
};
