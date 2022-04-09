module.exports = {
  user: {
    signin: require('./user/signin'),
    signout: require('./user/signout'),
    signup: require('./user/signup'),
  },
  order: {
    get: require('./order/get'),
    post: require('./order/post'),
  },
};
