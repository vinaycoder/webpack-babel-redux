const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= {
    entry: path.join(__dirname,'./src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
        publicPath: '/'
    },
    module:
    {
        rules:
        [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'

        }]
    },
      devServer: {
    historyApiFallback: true,
  },
    plugins:[
        new HtmlWebpackPlugin({
			template: './src/index.html'
		})
    ]
}