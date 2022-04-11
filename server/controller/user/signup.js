const { user } = require('../../models/index');

module.exports = async (req, res) => {
  const { userName, phoneNumber, favBrand, email, password } = req.body;

  const exists = await user.findOne({
    where: { email: email, password: password },
  });

  if (!exists) {
    const createUser = await user.create({
      userName: userName,
      phoneNumber: phoneNumber,
      favBrand: favBrand,
      email: email,
      password: password,
    });

    // console.log(createUser.dataValues);

    return res.status(201).json({
      data: createUser.dataValues,
    });
  } else {
    return res.status(409).json('이미 회원가입한 사용자입니다.');
  }

  // return res.status(500).json('Internal Server Error');
};
