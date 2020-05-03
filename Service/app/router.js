'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/Register', controller.home.register);
  router.get('/login', controller.home.login);
  router.get('/search', controller.search.search);
  router.get('/goods', controller.home.goods);
  router.get('/AddToCar', controller.addtocar.addtocar);
  router.get('/GetCar', controller.getcar.getcar);
  router.get('/RemoveItem',controller.removeitem.removeitem)
  router.get('/RemoveAllItem',controller.removeitem.RemoveAllItem)
};
