import { asValue } from 'awilix';

export function baseMiddleware(app) {
  return (req, res, next) => {
    res.successPrint = (message, data) => {
      res.json({
        success: true,
        message,
        data
      });
    };

    res.failPrint = (message, data) => {
      res.json({
        success: false,
        message,
        data
      });
    };

    req.app = app;

    // 注入request、response
    req.container = req.container.createScope();
    req.container.register({
      request: asValue(req),
      response: asValue(res)
    });
    next();
  }
}