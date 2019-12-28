'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let query = this.ctx.params;
    const user = await ctx.service.user.getAdmin('user');
    let str = {}
    try {
      str = {msg:'查询成功',code:0,data:user,total:user.length}
    } catch (user) {
      str = {msg:'查询失败',code:1,data:null,total:null}
    }
    ctx.body = str
  }
  async login() {
    const { ctx } = this;
    let query = ctx.request.body
    if(!query.name){
      ctx.body = {
      msg:'查询失败',
      code:1,
      data:null
    }
    }else{
      ctx.body = {
        msg:'查询成功',
        code:0,
        data:{
          emeil:'2480790748@qq.com',
          name:query.name,
          age:21
        }
      }
    }
  }
}

module.exports = HomeController;
