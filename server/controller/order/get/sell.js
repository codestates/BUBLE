const { isAuthorized } = require('../../tokenFunctions');
const { user } = require('../../../models');
const { sellHistory } = require('../../../models');

module.exports = async (req, res) => {
  let token = isAuthorized(req);

  if (token) {
    const userExists = await user.findOne({ where: { email: token } });
    if (userExists) {
      let sellList = await sellHistory.findAll();
      let data = [];
      for (let s of sellList) {
        data.push(s.dataValues);
      }
      return res.status(200).send({ data: data });
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

  //경우의 수 :
  //1)토큰이 제대로 들어오지 않을 때
  //(1)header.authorization에 아무것도 없을 때 : accessToken 단계부터 없을 때
  //verify를 할 수 없을 때 : token이 undefined
  // -> 아무튼 둘다 로그인 되지 않은 상태
  //2)제대로 들어왔는데
  //(1)일치하는 정보가 없을 때
  //(2)일치하는 정보가 있는데 이 사용자 정보가 아닐 떄
  // -> 둘다 invalid token

  //verify할 때 어떤 정보와 비교?
};
