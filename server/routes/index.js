const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const orderRouter = require('./order');

router.use('/user', userRouter);
router.use('/order', orderRouter);

//router로 모든 /items 경로에 대해

module.exports = router;
