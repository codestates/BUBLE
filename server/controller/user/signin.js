const { user } = require('../../models/index');
const { generateToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (email === '' || password === '') {
    return res.status(400).send('bad request');
  }

  const userInfo = await user.findOne({
    where: { email: email, password: password },
  });

  console.log(userInfo);

  if (userInfo) {
    const { id, userName, phoneNumber, favBrand } = userInfo;

    const accessToken = generateToken(email);
    const refreshToken = generateToken(email);
    //refreshToken을 쿠키에 저장해두고 실제 데이터를 가져오는 accessToken을 요청마다 발급받는다

    console.log(accessToken);

    res.status(200).send({
      //cookie로 토큰 여러개 보낼 수 없어서 응답으로 보낸 다음 -> 클라에서 localStorage.setItem('accessToken', accessToken)
      data: {
        id,
        userName,
        phoneNumber,
        favBrand,
        email,
        password,
      },
      accessToken: accessToken,
    });
  } else {
    res.status(401).send('invalid user or wrong password');
  }

  // res.status(500).send('internal server error');

  //cookie에 refreshToken (보안)
};
