Welcome to Express-Vue App

server与client一个命令启动。

=========================

根据database.sql创建mysql数据库后和table后，修改config.properties配置

开发：

```
npm run dev
// or yarn dev
```

部署：

```
npm run build && npm run start
// or yarn build && yarn start
```

### 服务端技术栈

*   [框架 Express](http://expressjs.com/)
*   [热更新 nodemon](https://github.com/remy/nodemon)
*   [依赖注入 awilix](https://github.com/jeffijoe/awilix)
*   [数据持久化 sequelize](https://github.com/sequelize/sequelize)
*   [部署 pm2](https://pm2.io/)

### 客户端技术栈

*   [vue-router](https://router.vuejs.org)
*   [vuex](https://vuex.vuejs.org)
*   [axios](https://github.com/axios/axios)
*   [vue-class-component](https://github.com/vuejs/vue-class-component)
*   [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator#readme)
*   [vuex-class](https://github.com/ktsn/vuex-class)