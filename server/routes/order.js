const router = require('express').Router();
const controller = require('../controller/index');

// // GET /items Router와 Controller를 연결합니다.
router.get('/', controller.order.get);
router.post('/', controller.order.post);

// //로 get 요청하면 controllers 파일의 items를 get하도록

module.exports = router;

//// /:user_id/buy,sell,borrow 한 곳에? post에 따라? getdp Efk?
