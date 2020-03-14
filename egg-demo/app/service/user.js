'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async user() {
    return {
      title: 'what\'s your name?',
      content: 'my name is zcz',
    };
  }
}


module.exports = UserService;
