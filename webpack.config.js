const path = require(`path`)

module.exports = {
  entry: `./src/index.js`,

  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },

  devServer: {
    static: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 1337,

    client: {
      overlay: false
    }
  },

  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,

        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  devtool: `source-map`
}
