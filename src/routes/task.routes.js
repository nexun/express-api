const router = require("express").Router();
const {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
} = require("../controller/task.controller");
const { authJwt } = require("../middleware");

router.get("/", [authJwt.check], getTasks);
router.post("/", [authJwt.check], addTask);
router.delete("/:id", [authJwt.check], deleteTask);
router.put("/:id", [authJwt.check], updateTask);

module.exports = router;
