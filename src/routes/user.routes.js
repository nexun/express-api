const router = require("express").Router();
const {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
} = require("../controller/user.controller");
const { authJwt } = require("../middleware");

router.get("/", [authJwt.check], getUsers);
router.post("/", [authJwt.check], addUser);
router.delete("/:id", [authJwt.check], deleteUser);
router.put("/:id", [authJwt.check], updateUser);

module.exports = router;
