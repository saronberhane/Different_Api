const express = require("express");

// Create an express router
const router = express.Router();

// Import the controller functions from the controller file
const { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog,} = require("./controller");


//routes for getting all blogs and creating a blog
router.route("/").get(getAllBlogs).post(createBlog);
//routes for getting, updating, and deleting a specific blog
router.route("/:id").get(getBlog).patch(updateBlog).delete(deleteBlog);


module.exports = router;
