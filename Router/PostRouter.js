const express = require("express");
const router = express.Router();

const upload = require('../middleware/ploadMiddleware.js');

const generateelleryController = require("../Controller/PostController");

router.post("/add-media",upload.single('media'), generateelleryController.addPost);
router.get("/getMedia",generateelleryController.getPost)
router.delete("/deleteMedia/:id",generateelleryController.deletePost)

module.exports = router;
