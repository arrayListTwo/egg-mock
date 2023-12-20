const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const num = Math.random();
    if (num >= 0.5) {
      ctx.body = 'hi, egg';
    } else {
      throw new Error('egg error');
    }
  }
}

module.exports = HomeController;
