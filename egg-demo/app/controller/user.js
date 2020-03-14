'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const { username } = ctx.query;
    ctx.body = username;
  }
}

module.exports = UserController;
