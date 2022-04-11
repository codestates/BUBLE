const { Item } = require('../../models');
const { Op } = require('sequelize');

module.exports = {
  get: async (req, res) => {
    try {
      console.log(Item);

      // TODO: 랜덤 함수 사용
      const randomItem = [3, 5, 6, 8];

      const itemInfo = await Item.findAll({
        where: { id: { [Op.in]: randomItem } },
        attributes: ['id', 'img', 'itemName', 'buyPrice'],
      }).then((res) => {
        return res.map((el) => {
          return {
            id: el.id,
            img: el.img,
            itemName: el.itemName,
            buyPrice: el.buyPrice,
          };
        });
      });

      res.status(200).json({ popular: itemInfo });
    } catch (err) {
      cconsole.error(err);
      res.status(500).json({ message: 'Server error!' });
      return;
    }
  },
};
