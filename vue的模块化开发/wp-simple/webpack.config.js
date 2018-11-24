var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',//入口文件指向
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',//虚拟的输出目录，浏览器只支持打包之后的文件也就是生产坏境下的文件放到了虚拟内存下浏览器才能支持，我们在开发环境下看到的文件浏览器是不支持的
    filename: 'build.js'
  },
  module: {//对一些模块以及loader进行设定
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {//是帮我们在导入一些文件后可以省略后缀
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {//写在了package-json的build脚本里面，是否自动开启浏览器等设置
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'//设置当有错误时，指到开发环境下
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'//设置成source-map模式
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([//导出了一些webpack的插件
    new webpack.DefinePlugin({//DefinePlugin用来设置生产环境的
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({//UglifyJsPlugin是做压缩的
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({//LoaderOptionsPlugin是用来加载loader模式的
      minimize: true
    })
  ])
}
