const express = require('express');
const router = express.Router();
const upload = require('../middleware/ploadMiddleware.js');
// const { addToGallery } = require('../Controller/gelleryController.js');

const generateelleryController = require("../Controller/GallearyController.js");
router.post("/add-media",upload.single('media'), generateelleryController.addMedia);
router.get("/getMedia",generateelleryController.getMedia)
router.delete("/deleteMedia/:id",generateelleryController.deleteMedia)
// router.get('/get-gallery', generateelleryController.getAllGallery);

module.exports = router;
