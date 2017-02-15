var webpack = require("webpack");
module.exports = {
  entry:__dirname + "/App/app.js",
  output:{
    filename:"bundle.js",
    path:__dirname
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["es2015","react"] }
        }]
      }
    ]
  },
  devServer:{
    contentBase: __dirname,
    stats: {
        colors: true
    },
    historyApiFallback:true,
    inline:true,
    port:3000,
    hot:true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
};
