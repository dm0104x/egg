'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getAdmin(ku,data) {
  // "users" 为test数据库数据表名
    const user = await this.app.mysql.query('select * from user', '');
    return user
  }

  async find(ku,data) {
  // "users" 为test数据库数据表名
    const user = await this.app.mysql.insert(ku,data);
    return user
  }
}

module.exports = UserService;