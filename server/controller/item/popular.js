const { Item } = require('../../models');
const { Op } = require('sequelize');

function getRandomNum() {
  let arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(Math.floor(Math.random() * (300 + 1)));
  }
  return arr;
}

module.exports = {
  get: async (req, res) => {
    try {
      // 랜덤 함수 사용
      const randomItem = await getRandomNum();

      const itemInfo = await Item.findAll({
        where: { id: { [Op.in]: randomItem } },
        attributes: ['id', 'img', 'itemName', 'buyPrice'],
      });

      res.status(200).json({ popular: itemInfo });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error!' });
      return;
    }
  },
};
