const MediaModel = require('../models/GalleryModel.js'); 
const path = require('path');

exports.addMedia = async (req, res) => {
  try {
    const { caption , type } = req.body;
    const mediaFile = req.file;

    if (!mediaFile) {
      return res.status(400).json({ status: false, message: "No media file uploaded" });
    }

    const newMedia = new MediaModel({
      caption,
      type,
      mediaUrl: `/uploads/${mediaFile.filename}` 
    });

    await newMedia.save();

    res.status(201).json({
      status: true,
      message: 'Media added successfully',
      data: newMedia
    });
  } catch (error) {
    console.error('Error in addMedia:', error);
    res.status(500).json({ status: false, error: error.message });
  }
};


exports.getMedia = async (req,res)=>{
  try {
    var midia = await MediaModel.find()
    res.status(200).json({
      data: midia
    })
  } catch (error) {
    res.status(500).json({
      Error: error
    })
  }
}

exports.deleteMedia = async (req,res)=>{
 try {
    const id = req.params.id;
    const deleteMedia = await GalleryModel.findByIdAndDelete(id);

    if (deleteMedia) {
      return res.status(200).json({
        message: "Deleted Successfully",
      });
    } else {
      return res.status(404).json({
        message: "Post not found",
      });
    }
  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({
      message: "Not Deleted due to server error",
    });
  }
}
