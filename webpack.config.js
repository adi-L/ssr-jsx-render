const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUTPUT_PATH = path.join(__dirname, '/dist');

module.exports = (env) => {

  const HTMLPlugin = new HtmlWebpackPlugin({
    template: 'index.html'
  });

  const config = {
    mode: 'development',
    entry: {
      index: ['babel-polyfill', './index.js']
    },
    output: {
      path: OUTPUT_PATH,
      publicPath: 'http://localhost:9000/',
      chunkFilename: '[name].bundle.js',
      filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options:{
            babelrc: false,
            "plugins": [
              [
                "babel-plugin-jsx-pragmatic",
                {
                  "import": "dom",
                  "module": __dirname+"/jsx-render/Client/dom.js"
                }
              ]
            ],
            "presets": [
              "babel-preset-primavera",
              [
                "@babel/preset-react",
                {
                  "pragma": "dom"
                }
              ]
            ]
          },
        },
        {
          test: /\.html$/,
          loader: 'raw-loader'
        }
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    plugins: [HTMLPlugin],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: OUTPUT_PATH,
        historyApiFallback: true,
        compress: true,
        port: 9000,
        hot: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
  };

  return config;
};
