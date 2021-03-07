const path = require('path');

module.exports = {
  // 開発用の設定
  mode: 'development',

  // エントリポイントとなるコード
  entry: './src/index.tsx',

  // バンドル後の js ファイルの出力先
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  // import 時に読み込むファイルの拡張子
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },

 // devServerの設定
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    host: '0.0.0.0',
  },

  // ソースマップファイルの出力設定
  devtool: 'source-map',

  module: {
    rules: [
      // TypeScript ファイル (.ts/.tsx) を変換できるようにする
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },

 
};