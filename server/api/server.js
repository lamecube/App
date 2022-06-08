const primaryRouter = require("express").Router();

//Middleware
const jwt = require("./auth/preAuth/jwt");

//Bring in the Routes
const publicRouter = require("./public/publicRouter");
const privateRouter = require("./private/privateRouter");

//Login, Register, GoogleAuth, FaceBookAuth, GitHubAuth
const authRouter = require("./auth/auth");

//Implement Routes
primaryRouter.use("/", authRouter);
primaryRouter.use("/", publicRouter);

primaryRouter.use("/", jwt.chkToken(), privateRouter);

module.exports = primaryRouter;
