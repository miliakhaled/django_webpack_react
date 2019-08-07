module.exports = {
    mode: 'development',
    entry: './static/js/index.js',
    output: {
        publicPath: "http://127.0.0.1:8080/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        cacheDirectory: true,
                        plugins: ['react-hot-loader/babel']

                    }
                }
            },

        ]
    },
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        host: '0.0.0.0',
        port: 8080,
    },
};