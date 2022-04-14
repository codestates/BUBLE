const router = require('express').Router();
const controller = require('./../controllers');

// GET /items Router와 Controller를 연결합니다.
router.get('/', controller.user.get);
//로 get 요청하면 controllers 파일의 items를 get하도록

module.exports = router;
