'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async list() {
    const { ctx } = this;
    let query = this.ctx.request.body;
    function getRandom(num){
        return  Math.floor((Math.random()+Math.floor(Math.random()*9+1))*Math.pow(10,num-1));
    }
    query.id = getRandom(8)
    console.log(query)
    const user = await ctx.service.user.find('user',query);
    ctx.body = user;
  }
}

module.exports = HomeController;
