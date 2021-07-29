const express = require("express");
const router = express.Router();
const commentsCtrl = require("../controllers/commentsCtrl");


router.get("/",  commentsCtrl.findAllComments);

router.put("/;id", commentsCtrl.updateComment);

router.get("/:id", commentsCtrl.findOneComment);

router.post("/", commentsCtrl.createComment);

router.delete("/:id", commentsCtrl.deleteOneComment);

module.exports = router;