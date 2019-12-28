'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/user/', 'home.index');
  router.post('/user/login', 'home.login');
  router.post('/base', 'base.list');
};
