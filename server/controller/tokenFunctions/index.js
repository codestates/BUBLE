const { sign, verify } = require('jsonwebtoken');

require('dotenv').config({ path: '../../.env' });

module.exports = {
  generateToken: (data) => {
    return sign(data, process.env.ACCESS_TOKEN);
  },

  isAuthorized: (req) => {
    const accessToken = req.headers.authorization.split(' ')[1];
    if (!accessToken) {
      return null;
    }
    try {
      // user data
      return verify(accessToken, process.env.ACCESS_TOKEN);
    } catch (e) {
      return false;
    }
  },
};
