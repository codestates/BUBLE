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
    email,
    password,
  });

  // res.cookies('refreshToken', refreshToken).send(
  //   { data : {
  //       "id": PK,
  //       "user_name": "user_name",
  //       "email": "email",
  //       "password": "password",
  //       "phone_number": "phone_number",
  //       "fav_brand" : "fav_brand",
  //       "createdAt": "created time",
  //       "updatedAt": "updated time"
  //   },
  //   accessToken: accessToken}
  //   )

  //cookie에 refreshToken (보안)
  //state에 accessToken (expire)
  //logout 시 delete all tokens
};
