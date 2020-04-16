const path = require('path')
module.exports = {
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
          .set('@', path.resolve('examples'))
          .set('~', path.resolve('packages'));
    config.module
          .rule('eslint')
          .exclude.add(path.resolve('lib'))
          .end()
          .exclude.add(path.resolve('examples/docs'))
          .end();
    config.module
          .rule('js')
          .include.add(/packages/)
          .end()
          .include.add(/examples/)
          .end()
          .use('babel')
          .loader('babel-loader')
          .tap(options => {
              return options;
          });
  },
  lintOnSave: false,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    }
  }
}
