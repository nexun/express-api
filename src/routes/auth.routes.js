const router = require("express").Router();
const { login } = require("../controller/auth.controller");
const { addUser } = require("../controller/user.controller");

router.post("/login", login);
router.post("/register", addUser);

module.exports = router;
