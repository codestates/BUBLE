const router = require('express').Router();
const { like } = require('../controller');

// get 요청
router.get('/:userid/buy', like.like.buy.get);
router.get('/:userid/borrow', like.like.borrow.get);

// post 요청
router.post('/:userid/buy', like.like.buy.post);
router.post('/:userid/borrow', like.like.borrow.post);

module.exports = router;
