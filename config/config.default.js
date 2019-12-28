/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577417815941_1050';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      enable: false,
      // headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    }
  }
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '101.201.69.11',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456mysql',
      // 数据库名
      database: 'users',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.cluster = {
      listen: {
        path: '',
        port: 8765,
        hostname: '0.0.0.0',
      }
  };

  return {
    ...config,
    ...userConfig,
  };
};
