import { route, GET, POST } from 'awilix-express';

@route('/todo')
export default class TodoAPI {

  constructor({ todoService }) {
    this.todoService = todoService;
  }

  @route('/getData')
  @GET()
  async getData(req, res) {
    res.successPrint('请求成功', {
      info: 'Welcome to Express-Vue App'
    })
  }

  @route('/getTodolist')
  @GET()
  async getTodolist(req, res) {
    const { success, data: todolist, message } = await this.todoService.getList();
    if (!success) {
      res.failPrint(message);
      return;
    }
    res.successPrint(message, todolist);
  }

  @route('/addTodoItem')
  @POST()
  async addTodoItem(req, res) {
    const { name, state } = req.body;
    const { success, message } = await this.todoService.addTodoItem({name, state});
    if (!success) {
      res.failPrint(message);
      return;
    }
    res.successPrint(message);
  }

  
  @route('/updateItem')
  @POST()
  async updateItem(req, res) {
    const { name, state } = req.body;
    const { success, message } = await this.todoService.updateItem({name, state});
    if (!success) {
      res.failPrint(message);
      return;
    }
    res.successPrint(message);
  }
}