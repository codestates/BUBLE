const { isAuthorized } = require('../../tokenFunctions');
const { user } = require('../../../models');
const { sellHistory } = require('../../../models');

module.exports = async (req, res) => {
  const { userId, itemId } = req.body;

  let token = isAuthorized(req);

  if (token) {
    const userExists = await user.findOne({ where: { email: token } });
    if (userExists) {
      let sellList = await sellHistory.create({
        userId: userId,
        itemId: itemId,
      });
      console.log(sellList);
      return res.status(201).send('created successfully');
    } else {
      return res.status(400).send('user not found');
    }
  } else {
    if (token === false) {
      return res.status(400).send('invalid token');
    } else if (token === null) {
      return res.status(401).send('not logged in');
    }
  }

  //verify할 때 어떤 정보와 비교?
};
