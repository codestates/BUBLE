const { user } = require('../../models');
const { Item } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

const benchmark = { received: 0 };

module.exports = {
  get: async (req, res) => {
    try {
      // TODO: authentication 함수 사용
      // i.e. const userInfo = await isAuthorized(req)
      const authorization = req.headers.authorization;
      console.log(isAuthorized(authorization));

      // userid = 9 사용 => 한글 '나이키'
      const { userfav: userid } = req.params;

      const userInfo = await user.findOne({
        where: { id: userid },
        attributes: ['favBrand'],
      });

      // console.log('userInfo=======', userInfo);
      // 로그인 인증 확인후 통과봐면
      // TODO: 4개씩 보내주는 로직 짜기
      // [[['id', 'itemName', 'buyPrice', 'img'], ['id', 'itemName', 'buyPrice', 'img'], ['id', 'itemName', 'buyPrice', 'img']]...]
      if (userInfo) {
        const { favBrand } = userInfo;
        const itemInfo = await Item.findAll({
          where: { brand: favBrand },
          attributes: ['id', 'itemName', 'buyPrice', 'img'],
        });

        if (!itemInfo.length || itemInfo.length < 4) {
          res.status(404).json({ message: 'Not found!!' });
          return;
        }

        res.status(200).json({ message: itemInfo });
        console.log(benchmark.received);
        benchmark.received += 1;
        // 로그인 인증 확인불가
      } else {
        res.status(403).json({ message: 'Not authorized!' });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error! from fav' });
    }
  },
};
