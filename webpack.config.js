const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./src'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[
            { test:/\.css$/,use:['style-loader','css-loader']},
            { test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            { test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            { test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=57249&name=[hash:8]-[name].[ext]'},
            // bootstrap 中的字体文件
            { test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            { test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            { test:/\.vue$/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }
}