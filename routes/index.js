const express = require('express');
const router = express.Router();
const itemRouter = require('./item');
const userRouter = require('./user');
const orderRouter = require('./order');
const likeRouter = require('./like');

// TODO: Endpoint에 따라 적절한 Router로 연결해야 합니다.
//express 가져와서 express.Router()으로
//itemsRouter로 items 파일 가져와서

router.use('/item', itemRouter);
router.use('/user', userRouter);
router.use('/like', likeRouter);
router.use('/order', orderRouter);

//router로 모든 /items 경로에 대해

module.exports = router;
