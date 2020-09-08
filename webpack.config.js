module.exports = {
  entry: {
    main: './main.js'
  },
  // mode 说明 https://www.webpackjs.com/concepts/mode/
  mode: 'development',
  //https://webpack.js.org/configuration/optimization/#root
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
            plugins: [ [ '@babel/plugin-transform-react-jsx', { pragma: 'creatElement' } ] ]
          }
        }
      }
    ]
  }
};
