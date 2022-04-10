const { user } = require('../../models/index');

module.exports = async (req, res) => {
  //브라우저에서 로컬 스토리지에 있는 쿠키 삭제
  //logout 시 delete all tokens

  if (req.cookie) {
    return res
      .status(200)
      .clearCookie('refreshToken')
      .json('successfully signed out');
  } else {
    return res.status(400).json("you're currently not logined");
  }
};
