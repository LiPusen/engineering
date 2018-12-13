//版本检查针对npm和node
require('./check-versions')()

process.env.NODE_ENV = 'production'

// 优雅的加载转轮效果
var ora = require('ora')
// node环境下的强制删除命令
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('开始构建...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  构建完成!\n'))
    console.log(chalk.yellow('  Tip: 将生成的dist文件夹上传至web服务器进行部署.'))
  })
})
