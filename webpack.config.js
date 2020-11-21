let path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ["babel-polyfill","./src/js/index.js"],
    output:{
        filename:"js/bundle.js",
        path:path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
      ],
      module: {
        rules: [
          { test: /\.js$/, 
            exclude: /node_modules/,
            use: {
              loader:'babel-loader'
          },
          
          
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, 
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.(svg)$/i,
            use: [
              {
                loader: 'url-loader',
              },
            ],
          },
          
        ]
      },
      resolve: {
        modules: [
          process.env.NODE_PATH || 'node_modules',
        ]
      }
}