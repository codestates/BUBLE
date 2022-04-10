const { verifyToken } = require('../../tokenFunctions');
const { user } = require('../../../models');
const { sellHistory } = require('../../../models');

module.exports = async (req, res) => {
  const accessToken = req.headers.authorization.split(' ')[1];

  if (!accessToken) {
    return res.status(401).json('not logged in ');
    //token 아예 header로 안 넘어감 : 즉 없음
  }
  try {
    const token = await verifyToken(accessToken);
    const exists = await user.findOne({ where: { email: token } });
    //exists가 없으면 null

    //lee@gmail.com
    //존재
    if (exists) {
      if (String(exists.id) === req.params.userId) {
        //존재하고 보낸 userId와 보낸 토큰(이메일) 일치 시
        let sellList = await sellHistory.findAll();
        let data = [];
        for (let s of sellList) {
          data.push(s.dataValues);
        }
        return res.status(200).send({ data: data });
      } else {
        return res.status(401).send('wrong user');
        //존재하지만 보낸 값과 일치 X면 : email이 같은 사람 존재 용도..?
      }
    } else {
      return res.status(401).send('no user');
      //token이 verify는 되지만 정보 중에 없으면
    }
  } catch (e) {
    return res.status(401).json('invalid token');
    //verify를 못할 때
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
