/**
 * @file vue-cli config
 */
const path = require('path');
const clientPath = path.resolve(process.cwd(), './src/client');
module.exports = {
  configureWebpack: {
    entry: [
      path.resolve(clientPath, 'main.js')
    ],
    resolve: {
      alias: {
        '@': clientPath
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:9001'
        }
      }
    }
  },
  outputDir: './dist/client/'
};