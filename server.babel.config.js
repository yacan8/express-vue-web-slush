var isDebug = process.env.NODE_ENV === 'development';

var config = {
  presets: [
    ['@babel/env', {
      useBuiltIns: false,
      targets: {
        node: 'current'
      }
    }]
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    '@babel/plugin-transform-runtime'
  ]
};

// 服务端开发环境babel配置文件 bable-node会自动添加polyfill，所以不需要添加preset/env
// if (isDebug) {
  // config.presets = [
  //   ['@babel/env', {
  //     useBuiltIns: false,
  //     targets: {
  //       node: 'current'
  //     }
  //   }]
  // ]
// }

module.exports = config;