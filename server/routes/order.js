const router = require('express').Router();
const controller = require('../controller/index');

// // GET /items Router와 Controller를 연결합니다.
router.get('/:userId/buy', controller.order.get.buy);
// router.get('/:userId/borrow', controller.order.get.borrow);
router.get('/:userId/sell', controller.order.get.sell);

router.post('/:userId/buy', controller.order.post.buy);
// router.post('/:userId/borrow', controller.order.post.borrow);
router.post('/:userId/sell', controller.order.post.sell);

// //로 get 요청하면 controllers 파일의 items를 get하도록

module.exports = router;

//// /:user_id/buy,sell,borrow 한 곳에? post에 따라? getdp Efk?
