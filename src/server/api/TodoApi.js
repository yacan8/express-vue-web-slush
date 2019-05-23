import { route, GET } from 'awilix-express';

@route('/todo')
export default class TodoAPI {

  @route('/getData')
  @GET()
  async getData(req, res) {
    res.successPrint('请求成功', {
      info: 'Welcome to Express-Vue App'
    })
  }
}