const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const htmlplugin=require("html-webpack-plugin")

// in case you run into any typescript error when configuring `devServer`
 module.exports= {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
  },
    mode: 'production',
  
    module:{
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

     { test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]},

    plugins:[
      new htmlplugin( {
        template:"./public/index.html",
        inject:"body",
        filename:"public/web.html"
      }),
        new MiniCssExtractPlugin({
          filename:"main.[hash].css"
        })
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
      optimization: {
        // minimize: true,
        minimizer: [new TerserPlugin()],
      },


}
