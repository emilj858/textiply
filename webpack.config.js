const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';

module.exports = [{
  entry: {
    bundle: './src/index.js',
    'm/ui/pdf.worker': 'pdfjs-dist/build/pdf.worker.entry'
  },
  module: {
    rules: [{ parser: { system: false } },
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        use: [
          // {loader: 'react-hot-loader/webpack'},
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: ['react-hot-loader/babel'],
            },
          }
        ]
      }, {
        test: /\.(svg|png|ttf|woff2|woff|eot)$/,
        use: [{loader: 'file-loader'}]
      }, {
        test: /\.(scss|css)$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      }],
    noParse: [new RegExp('node_modules/localforage/dist/localforage.js')]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      config: `${__dirname}/config/${process.env.API_ACCESS}`
    }
  },
  output: {
    path: `${__dirname}/testdist`,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: 'bundle.[name].[chunkhash:8].js',
  },
  devtool: PROD ? 'source-map' : 'eval-source-map',
  devServer: {
    contentBase: './testdist',
    historyApiFallback: {
      rewrites: [
        { from: /^\/editor/, to: '/editor.html' },
        { from: /^\/shared/, to: '/editor.html' },
        { from: /^\/react/, to: '/index.html' },
      ]
    },
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      API_ACCESS: JSON.stringify(process.env.API_ACCESS || 'development')
    })
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
}, { // config for the test library bundle
  entry: {
    bundle: './src/entry.js',
    'pdf.worker': 'pdfjs-dist/build/pdf.worker.entry'
  },
  module: {
    rules: [{ parser: { system: false } },
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'src'),
        ],
        use: [{loader: 'babel-loader'}]
      }, {
        test: /\.(svg|png|ttf|woff2|woff|eot)$/,
        use: [{loader: 'file-loader'}]
      }, {
        test: /\.(scss|css)$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      config: `${__dirname}/config/${process.env.API_ACCESS}`
    }
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  optimization: {
    minimizer: [new TerserPlugin({
      terserOptions: {
        keep_fnames: /^Jodit/
      }
    })],
  },
  plugins: PROD ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      API_ACCESS: JSON.stringify(process.env.API_ACCESS || 'production')
    })
  ] : [
    new webpack.DefinePlugin({
      API_ACCESS: JSON.stringify(process.env.API_ACCESS || 'production')
    })
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    chunkFilename: 'bundle.[name].[chunkhash:8].js',
    libraryTarget: 'amd'
  }
}];
