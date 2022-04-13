const { user } = require('../../models/index');

module.exports = async (req, res) => {
  //브라우저에서 로컬 스토리지에 있는 쿠키 삭제
  //logout 시 delete all tokens

  let token = req.headers.authorization.split(' ')[1];
  //localStorage의 accessToken이 삭제되면 null이라는 string으로 들어온다!!
  console.log(token);

  if (token === 'null') {
    return res.status(400).send("you're currently not logined");
  } else {
    return res.status(200).send('successfully signed out');
  }
};
