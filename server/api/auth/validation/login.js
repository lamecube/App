const dbModel = require("../authModel");

//If succesful, creates req.user
module.exports = async (req, res, next) => {
  const errors = {};
  const user = req.body;

  // required fields
  !!user.password ? null : errors.password = 'Password is Required'
  !!user.email ? null : errors.email = 'Email is Required';

  //Does the user exist
  if (Object.keys(errors).length < 1 ) {
    req.user = await dbModel.findByEmail(user.email);
    !!req.user ? null : errors.auth = 'Unknown Username or Password';
  }

  Object.keys(errors).length < 1 ? next() : res.status(401).json({ errors });
};
