const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A title is required"],
      unique: true,
    },

    tag: {
      type: [String],
      required: [true, "A tag is required"],
    },
    author: {
      type: String,
      required: [true, "An author is required"],
    },

    content: {
      type: String,
      required: [true, "Content is required"],
    },
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
    },
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
