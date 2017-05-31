module.exports = {
    // บอกว่า file ที่เข้าอยู่ไหน
    entry: './src/index.js',
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:'/node_modules/',
            }
        ]
    }

}