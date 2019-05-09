import { route, GET } from 'awilix-express';

@route('/index')
export default class SupplyAPI {

  @route('/getData')
  @GET()
  async getData(req, res) {
    res.successPrint('请求成功', {
      info: 'Welcome to Express-Vue App'
    })
  }
}