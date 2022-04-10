const { Item } = require('../../models');

module.exports = {
  get: async (req, res) => {
    try {
      const { itemId } = req.params;
      // console.log(itemId);

      // 요청이 잘못된 경우
      if (!itemId) {
        res.status(404).send({ message: 'Bad Request!' });
      } else {
        // itemId로 item 정보 조회
        const itemInfo = await Item.findOne({
          where: { id: itemId },
          attributes: [
            'id',
            'itemName',
            'brand',
            'buyPrice',
            'sellPrice',
            'img',
            'size',
            'grade',
            'quantity',
          ],
        });

        // 아이템이 존재하지 않는 경우
        if (!itemInfo) {
          return res.status(404).json({ message: 'Not Found!' });
        }

        // 아이템 정보 응답
        res.status(200).json({ message: itemInfo });
      }
    } catch (err) {
      // 서버 에러
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
};
