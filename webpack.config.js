const path = require('path');

module.exports = {
    entry: './src/fillit.js',
    output: {
        filename: 'fillit.js',
        path: path.resolve(__dirname, 'dist')
    }
};
