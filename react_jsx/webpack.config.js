require('@babel/register');
const path = require('path');

module.exports = {
    entry: {
        home_index:    path.resolve(__dirname, "src/home/index.jsx"),
        othello_index: path.resolve(__dirname, "src/othello/index.jsx"),
        tetris_index:  path.resolve(__dirname, "src/tetris/index.jsx"),
        shogi_index:   path.resolve(__dirname, "src/shogi/index.jsx"),
    },
    output: {
        path: path.resolve(__dirname, "../static/js/") ,
        filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions: [".js","jsx"],
    }
}