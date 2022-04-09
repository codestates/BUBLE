const { user } = require('../../models/index');

module.exports = async (req, res) => {
  const { userName, phoneNumber, favBrand, email, password } = req.body;

  const createUser = await user.create({
    userName: userName,
    phoneNumber: phoneNumber,
    favBrand: favBrand,
    email: email,
    password: password,
  });

  console.log(createUser.dataValues);

  res.json({
    data: createUser.dataValues,
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
