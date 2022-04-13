module.exports = {
  user: {
    signin: require('./user/signin'),
    signout: require('./user/signout'),
    signup: require('./user/signup'),
  },
  order: {
    get: {
      buy: require('./order/get/buy'),
      sell: require('./order/get/sell'),
      borrow: require('./order/get/borrow'),
    },
    post: {
      buy: require('./order/post/buy'),
      sell: require('./order/post/sell'),
      borrow: require('./order/post/borrow'),
    },
  },
  item: {
    item: require('./item'),
  },
  like: {
    like: require('./like'),
  },
};
