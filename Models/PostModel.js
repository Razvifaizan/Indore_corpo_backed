const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is Required"],
    trim: true,
  },
  post_image: {
    type: String,
    required: [true, "Image is required"],
    trim: true
  },
  content: {
    type: String,
    default: "user" // optional default role
  },
  role: {
    type: String,
    default: "user" // optional default role
  },
  status: {
    type: String,
    default: "active"
  },
  info: {
    type: String
  }
});

postSchema.plugin(uniqueValidator);

// const postSchemaModel = mongoose.model("post_collection", postSchema);

// module.exports = { postSchemaModel };

module.exports = mongoose.model('Post', postSchema);
