const { buyCart } = require('../../models');
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
        const buyCartInfo = await buyCart
          .findAndCountAll({
            where: { userId: userid },
          })
          .then((res) => {
            const { rows, count } = res;
            if (count > 0) {
              return rows.map((el) => el.itemId);
            }
          });

        // buyCartInfo가 있으면
        if (buyCartInfo) {
          const itemInfo = await Item.findAll({
            where: { id: { [Op.in]: buyCartInfo } },
            attributes: ['grade', 'size', 'itemName'],
          });

          res.status(200).json({ message: itemInfo });
        } else {
          // buyCartInfo가 없으면
          res.status(404).json({ message: 'Not Found!' });
        }
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error!' });
      return;
    }
  },
  post: async (req, res) => {
    try {
      // TODO: authentication 함수 사용

      // no authorized
      // if (!user) {
      //   res.status(401).json('You need to login');
      //   return;
      // }

      const { userId, itemId } = req.body;
      if (!userId || !itemId) {
        res.status(400).json({ message: 'Bad Request!' });
        return;
      }
      console.log(userId, typeof itemId);

      const insertIntobuyCarts = await buyCart.create({
        userId: userId,
        itemId: itemId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      res.status(201).json({ message: insertIntobuyCarts });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
};
