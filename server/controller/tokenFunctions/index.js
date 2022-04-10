const { sign, verify } = require('jsonwebtoken');

require('dotenv').config({ path: '../../.env' });

// const generateToken = (data) => {
//   return sign(data, process.env.ACCESS_TOKEN);
// };

// const verifyToken = (token) => {
//   return verify(token, process.env.ACCESS_TOKEN);
// };

module.exports = {
  generateToken: (data) => {
    return sign(data, process.env.ACCESS_TOKEN);
  },
  verifyToken: (token) => {
    return new Promise((resolve, reject) => {
      verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
        if (error) reject(error);
        resolve(decoded);
      });
    });
  },
};
