let configt = {}

if (process.env.NODE_ENV == 'production') {
  configt = {
    publicPath: 'docs',
    outputDir: './docs',
    runtimeCompiler: true,
    lintOnSave: false
  }
}

module.exports = configt