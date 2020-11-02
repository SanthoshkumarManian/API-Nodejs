const path=require('path');
const fs=require('fs');
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    devtool: 'cheap-module-eval-source-map',
    entry: ['babel-polyfill','./src/index.js'],
    output:{
            path:path.resolve(__dirname,'./public'),
            filename:'bundle.js',
            chunkFilename:'[id].js',
            publicPath:''
    },devServer: {
        inline: false,
     },
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                    },
                }
            }, 
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:[
                   
                    {loader:'style-loader'},
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:1,
                            modules:{
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        }
                    },
                   

                ]
            },
            {
                test:/\.(svg|png|jpg|jpe?g|gif|)$/,
                loader:'url-loader?limit=8000&name=images/[name].[ext]'
            }

        ]
    },
    target:'node',
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template:'./src/index.html',
    //         filename: 'index.html',
    //         inject: 'body'
    //     })
    // ] 
} 