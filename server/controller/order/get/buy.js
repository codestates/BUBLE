const { isAuthorized } = require('../../tokenFunctions');
const { user } = require('../../../models');
const { buyHistory } = require('../../../models');
const { Item } = require('../../../models');

module.exports = async (req, res) => {
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
      console.log(userExists.id);
      let buyList = await buyHistory.findAll({
        where: { userId: userExists.id },
      });
      //user가 산 itemId목록
      console.log(buyList);

      let item = await Item.findAll();
      //전체 item들
      let itemList = [];
      for (let i of item) {
        itemList.push(i.dataValues);
      }

      let data = [];
      //산 item이 배열 또는 요소 하나
      if (Array.isArray(buyList)) {
        for (let b of buyList) {
          //전체 item 중 내가 산 itemId와 같은 거 찾아서 push
          let item = itemList.filter((el) => el.id === b.itemId);
          data.push(item[0]);
        }
      } else {
        let item = itemList.filter((el) => el.id === buyList.dataValues.itemId);
        data.push(item[0]);
      }

      return res.status(200).send({ data: data });
    } else {
      return res.status(400).send('user not found');
    }
  } else {
    if (token === false) {
      return res.status(401).send('invalid token');
    } else if (token === null) {
      return res.status(401).send('not logged in');
    }
  }

  // verify할 때 어떤 정보와 비교?
};
