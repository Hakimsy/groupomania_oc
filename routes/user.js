const express       = require("express");
const router        = express.Router();
const userCtrl      = require("../controllers/usersCtrl");

router.post("/", userCtrl.createUser)

// router.put("/:id", userCtrl.updateUser)

router.get("/all", userCtrl.findAllUsers)

router.get("/:id",  userCtrl.findOneUser)

router.delete("/:id", userCtrl.deleteUser)

module.exports = router