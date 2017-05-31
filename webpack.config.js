let path = require('path')

module.exports = {
    // บอกว่า file ที่เข้าอยู่ไหน
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: './public/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
        }]
    }

}