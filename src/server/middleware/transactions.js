/**
 * @file transactions
 */
import { asValue } from 'awilix';

export default function () {
  return function (req, res, next) {
    const sequelize = container.resolve('sequelize');
    sequelize.transaction({
      autocommit: false
    }).then(t => {
      req.container = req.container.createScope();
      req.container.register({
        transaction: asValue(t)
      });
      next();
    });
  }
}