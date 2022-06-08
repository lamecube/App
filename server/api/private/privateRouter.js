const privateRouter = require("express").Router();

const adminRouter = require("./admin/admin");
const userRouter = require("./users/users");

const jwt = require(_jwt);

//all routes https://apidevnow.com/<route>
privateRouter.use("/admin", jwt.chkRole(1), adminRouter);
privateRouter.use("/users", userRouter);

module.exports = privateRouter;
