const { isAuthorized } = require('../../tokenFunctions');
const { user } = require('../../../models');
const { buyHistory } = require('../../../models');

module.exports = async (req, res) => {
  const { userId, itemId } = req.body;
  // 경우의 수 :
  // 1)들어오지 않을 때
  // (1)header.authorization에 아무것도 없을 때 : accessToken 단계부터 없을 때
  // -> 로그인 되지 않은 상태
  // 2)제대로 들어왔는데
  // (1)일치하는 정보가 없을 때 : no user
  // (2)일치하는 정보가 있는데 이 사용자 정보가 아닐 떄 : wrong user
  // (3)verify가 안될 때 : invalid token

  let token = isAuthorized(req);

  if (token) {
    const userExists = await user.findOne({ where: { email: token } });
    if (userExists) {
      let buyList = await buyHistory.create({
        userId: userId,
        itemId: itemId,
      });

      return res.status(201).send('created successfully');
    } else {
      return res.status(400).send('user not found');
    }
  } else {
    if (token === false) {
      return res.status(400).send('invalid token');
    } else if (token === null) {
      return res.status(401).send('not logged in');
    }
  }
};
