const { user } = require('../../models/index');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const userInfo = await user.findOne({
    where: { email: email, password: password },
  });
  const { id, userName, phoneNumber, favBrand, createdAt, updatedAt } =
    userInfo;

  res.json({
    id,
    userName,
    phoneNumber,
    favBrand,
    createdAt,
    updatedAt,
  });

  //cookie에 refreshToken (보안)
  //state에 accessToken (expire)
  //logout 시 delete all tokens
};
