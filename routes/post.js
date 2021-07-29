const express       = require("express");
const router        = express.Router();
const postCtrl   = require("../controllers/postsCtrl");

router.post("/", postCtrl.createPost);

router.get("/:id", postCtrl.findOnePost);

router.get("/all", postCtrl.findAllPosts);

router.put("/:id", postCtrl.updatePost);

router.delete("/:id", postCtrl.deletePost);

module.exports = router;