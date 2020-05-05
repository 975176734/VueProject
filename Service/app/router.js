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
  router.get('/SimilarImg', controller.home.SimilarImg);
  router.get('/AddToCar', controller.addtocar.addtocar);
  router.get('/GetCar', controller.getcar.getcar);
  router.get('/RemoveItem',controller.removeitem.removeitem)
  router.get('/RemoveAllItem',controller.removeitem.RemoveAllItem)
  router.get('/getMedia', controller.video.getMedia);
  router.get('/getlunbopic', controller.home.getlunbopic);
  router.post('/changePW', controller.mycenter.changePW);
  router.get('/getimg', controller.getimg.getimg);
};
