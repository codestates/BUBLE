const { verifyToken } = require('../../tokenFunctions');
const { user } = require('../../../models');
const { sellHistory } = require('../../../models');

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

  const accessToken = req.headers.authorization.split(' ')[1];

  if (!accessToken) {
    return res.status(401).json('not logged in ');
    //token 아예 header로 안 넘어감 : 즉 없음
  }
  try {
    const token = await verifyToken(accessToken);
    console.log(token);
    const exists = await user.findOne({
      where: { email: token },
    });
    //exists가 없으면 null

    console.log(exists);

    //lee@gmail.com
    //존재
    if (exists) {
      if (String(exists.id) === req.params.userId) {
        //존재하고 보낸 userId와 보낸 토큰(이메일) 일치 시
        let sellList = await sellHistory.create({
          userId: userId,
          itemId: itemId,
        });
        console.log(sellList);

        return res.status(201).send('created successfully');
      } else {
        return res.status(401).send('wrong user');
        //존재하지만 보낸 값과 일치 X면 : email이 같은 사람 존재 용도..?
      }
    } else {
      return res.status(401).send('no user');
      //token이 verify는 되지만 정보 중에 없으면 : test 필요
    }
  } catch (e) {
    return res.status(401).send('invalid token');
    //verify를 못할 때
  }

  //verify할 때 어떤 정보와 비교?
};
