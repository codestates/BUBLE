// const { verifyToken } = require('../../tokenFunctions');
// const { user } = require('../../../models');
// const { borrowHistory } = require('../../../models');

// module.exports = async (req, res) => {
//   const accessToken = req.headers.authorization.split(' ')[1];
//   const token = verifyToken(accessToken);

//   //경우의 수 :
//   //1)토큰이 제대로 들어오지 않을 때
//   //(1)header.authorization에 아무것도 없을 때 : accessToken 단계부터 없을 때
//   //verify를 할 수 없을 때 : token이 undefined
//   // -> 아무튼 둘다 로그인 되지 않은 상태
//   //2)제대로 들어왔는데
//   //(1)일치하는 정보가 없을 때
//   //(2)일치하는 정보가 있는데 이 사용자 정보가 아닐 떄
//   // -> 둘다 invalid token

//   //verify할 때 어떤 정보와 비교?

//   if (!token) {
//     return res.status(403).send('not logged in');
//     //verify가 안되면
//   } else {
//     let exists = await user.findOne({ where: { email: token } });

//     //lee@gmail.com
//     //존재

//     if (!exists.isNewRecord) {
//       if (String(exists.id) === req.params.userId) {
//         //존재하고 보낸 userId와 보낸 토큰(이메일) 일치 시
//         let borrowList = await borrowHistory.findAll();
//         let data = [];
//         for (let b of borrowList) {
//           data.push(b.dataValues);
//         }

//         return res.status(200).send({ data: data });
//       }
//       //존재하지만 보낸 값과 일치 X면
//       return res.status(401).send('invalid token');
//     } else {
//       //token이 verify는 되지만 정보 중에 없으면
//       return res.status(401).send('wrong token');
//     }
//   }
// };
