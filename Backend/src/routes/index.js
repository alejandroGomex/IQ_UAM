const express = require('express');
const user_router = require('./user.router');
const result_router = require('./result.router');
function routerApi(app) {
  const router = express.Router();
  /*Endpoint estático http://localhost:5000/api/v1 */
  app.use('/api/v1', router);

  /*Endpoint estático http://localhost:5000/api/v1/user */
  router.use('/user', user_router); 

/*Endpoint estático http://localhost:5000/api/v1/result */
  router.use('/result', result_router)
}
module.exports = routerApi;
