const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
const authAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.jwToken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootKey = await Admin.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootKey) {
      // throw new Error("error");
      res.status(401).json({ message: "error" });
    }
    req.rootAdmin = rootKey;
    next();
  } catch (e) {
    // console.log("There is error authenticate");
    res.status(401).json({ message: "error" });
    // return { message: "error" };
  }
};
module.exports = authAdmin;
