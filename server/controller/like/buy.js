const { buyCart, Sequelize } = require('../../models');
const { Item } = require('../../models');
const { Op } = require('sequelize');

module.exports = {
  get: async (req, res) => {
    try {
      const { userid } = req.params;

      // TODO: authentication 함수 사용
      // i.e. const userInfo = await isAuthorized(req)

      // :userid가 숫자가 아니면 다음을 리턴
      if (isNaN(userid)) {
        res.status(400).json({ message: 'Bad Request!' });
        return;
      }

      // 숫자가 맞으면
      if (userid) {
        console.log(userid);
        const buyCartInfo = await buyCart.findAll({
          where: { userId: userid },
        });

        // console.log(buyCartInfo);
        // buyCartInfo가 빈배열이면 다음을 리턴
        if (!buyCartInfo.length) {
          res.status(404).json({ message: 'Not Found!' });
          return;
        }
        // console.log(userInfo);
        // 빈 배일이 아니면
        const itemId = [];
        buyCartInfo.map((el) => {
          itemId.push(el.itemId);
        });

        // 배열에서 아이템 찾는법
        const itemInfo = await Item.findAll({
          where: { id: { [Op.in]: itemId } },
          attributes: ['grade', 'size', 'itemName'],
        });

        res.send({ message: itemInfo });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error!' });
      return;
    }
  },
  post: async (req, res) => {
    console.log(req.body);

    res.end('like post요청!');
  },
};
