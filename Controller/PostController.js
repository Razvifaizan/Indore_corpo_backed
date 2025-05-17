const PostModel = require('../models/PostModel'); // Ensure this exports the mongoose model correctly
const path = require('path');

exports.addPost = async (req, res) => {
  try {
    const { title } = req.body;
    const postFile = req.file;

    if (!postFile) {
      return res.status(400).json({ status: false, message: "No post file uploaded" });
    }

    const newMedia = new PostModel({
      title,
      post_image: `/uploads/${postFile.filename}`
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


exports.getPost = async (req,res)=>{
  try {
    var midia = await PostModel.find()
    res.status(200).json({
      data: midia
    })
  } catch (error) {
    res.status(500).json({
      Error: error
    })
  }
}

exports.deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteMedia = await PostModel.findByIdAndDelete(id);

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
};
