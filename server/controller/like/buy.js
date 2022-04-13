const { buyCart } = require('../../models');
const { Item } = require('../../models');
const { user } = require('../../models');
const { Op } = require('sequelize');
const { isAuthorized } = require('../tokenFunctions');

module.exports = {
  get: async (req, res) => {
    try {
      const { userid } = req.params;

      // :userid가 숫자가 아니면 다음을 리턴
      if (isNaN(userid)) {
        res.status(400).json({ message: 'Bad Request!' });
        return;
      }

      // TODO: authentication 함수 사용
      const data = isAuthorized(req);

      const { email: userEmail } = await user.findOne({
        where: { id: userid },
      });

      console.log(userEmail);

      // 현재 회원이 조회할 권한이 없는 경우
      if (!data || data !== userEmail) {
        res.status(403).json({ message: 'Not authorized!' });
        return;
      }

      if (userid) {
        const buyCartInfo = await buyCart.findAll({
          where: { userId: userid },
        });

        // .then((res) => {
        //   const { rows, count } = res;
        //   if (count > 0) {
        //     return rows.map((el) => el.itemId);
        //   }
        // });

        if (buyCartInfo.length) {
          const itemId = buyCartInfo.map((el) => el.itemId);
          const itemInfo = await Item.findAll({
            where: { id: { [Op.in]: itemId } },
            attributes: ['id', 'grade', 'size', 'itemName'],
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

      const { userid, itemid } = req.body;
      const { userid: paramid } = req.params;

      if (!userid || !itemid) {
        res.status(400).json({ message: 'Bad Request!' });
        return;
      }
      const data = isAuthorized(req);

      console.log('data========', data);

      const { email: userEmail } = await user.findOne({
        where: { id: paramid },
      });
      console.log(userEmail === data);

      // 현재 회원이 조회할 권한이 없는 경우
      if (!data || data !== userEmail) {
        res.status(403).json({ message: 'Not authorized!' });
        return;
      }

      const insertIntoBuyCarts = await buyCart.create({
        userId: userid,
        itemId: itemid,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      res.status(201).json({ message: insertIntoBuyCarts });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
};
