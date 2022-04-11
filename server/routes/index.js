const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const orderRouter = require('./order');
const itemRouter = require('./item');
const likeRouter = require('./like');

router.use('/user', userRouter);
router.use('/order', orderRouter);
router.use('/item', itemRouter);
router.use('/like', likeRouter);

//router로 모든 /items 경로에 대해

module.exports = router;
