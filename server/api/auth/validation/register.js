const dbModel = require("../authModel");

//If succesful, creates req.user
module.exports = async (req, res, next) => {
  const errors = {};
  const user = req.body;

  // required fields
  !!user.password ? null : errors.password = 'Password is Required'
  !!user.email ? null : errors.email = 'Email is Required';

  //Validate email is real. 
  if (!!user.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
    errors.email = "Unexpected Eamil Address";
  }

  //Does the user exist
  if (Object.keys(errors).length < 1) {
    req.user = await dbModel.findByEmail(user.email);
    !!req.user ? null : errors.auth = 'Looks like you may already be a member...';
  }

  Object.keys(errors).length < 1 ? next() : res.status(401).json({ errors });
};
