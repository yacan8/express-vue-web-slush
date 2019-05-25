/**
 * @file app
 */
import express from 'express';
import { Lifetime, asClass } from 'awilix';
import { loadControllers, scopePerRequest } from 'awilix-express';
import container from './container';
import bodyParser from 'body-parser';
import path from 'path';
import fs from 'fs';
import { baseMiddleware } from './middleware/base';
import initialize from './initialize';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(cookieParser());
app.use(bodyParser());
app.use(scopePerRequest(container));
app.use(baseMiddleware(app));
app.use('/api', loadControllers('api/*.js', {
  cwd: __dirname,
  lifetime: Lifetime.SINGLETON
}));

export default async function run() {
  await initialize(app);

  // 依赖注入配置service层和dao层
  container.loadModules(['services/*.js', 'daos/*.js'], {
    formatName: 'camelCase',
    register: asClass,
    cwd: path.resolve(__dirname)
  });

  app.get('*', (req, res) => {
    const html = fs.readFileSync(path.resolve(__dirname, '../client', 'index.html'), 'utf-8');
    res.send(html);
  });

  app.listen(9001, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Listening at http://localhost:9001');
  });
}