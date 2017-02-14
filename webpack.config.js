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
    publicPath: __dirname,
    stats: {
        colors: true
    },
    hot:true,
    inline:true
  }
};
