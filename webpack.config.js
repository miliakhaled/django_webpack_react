var path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        main: './static/js/'

    },
    output: {
        filename: "main.js",
        path: path.resolve('./build')
    }
};