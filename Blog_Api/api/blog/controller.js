// Import the Blog module from the DAL
const Blog = require("./dal");

// Getting all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    // Get all the blogs using the Blog module
    const blogs = await Blog.getAllBlog();

    // Return the blogs as a JSON response with a success status
    res.status(200).json({
      status: "SUCCESS",
      results: blogs.length,
      data: {
        blogs,
      },
    });
  } catch (error) {
    // Return an error response if an error occurs
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

// Getting a single blog by id
exports.getBlog = async (req, res) => {
  try {
    // Get the blog with the specified id using the Blog module
    const blog = await Blog.getBlog(req.params.id);

    // If the blog doesn't exist, return a failure response
    if (!blog) {
      return res.status(404).json({
        status: "FAIL",
        message: "There is no data with the specified id",
      });
    }

    // Return the blog as a JSON response with a success status
    res.status(200).json({
      status: "SUCCESS",
      data: {
        blog,
      },
    });
  } catch (error) {
    // Return an error response if an error occurs
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

// Creating a new blog
exports.createBlog = async (req, res) => {
  try {
    // Extract the necessary fields from the request body
    const { title, tag, author } = req.body;

    // Check if the necessary fields are present
    if (!title || !tag || !author) {
      return res.status(400).json({
        status: "ERROR",
        message: "Please provide the necessary fields",
      });
    }

    // Create a new blog using the Blog module
    const newBlog = await Blog.createBlog({
      title,
      tag,
      author,
    });

    // Return the new blog as a JSON response with a success status
    res.status(200).json({
      status: "SUCCESS",
      message: "New blog is successfully registered",
      data: {
        blog: newBlog,
      },
    });
  } catch (error) {
    // Return an error response if an error occurs
    res.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};

//Updating an existing blog by id
exports.updateBlog = async (req, res) => {
  try {
    // Get the blog with the specified id using the Blog module
    const getBlog = await Blog.getBlog(req.params.id);

    // If the blog doesn't exist, return a failure response
    if (!getBlog) {
      return res.status(404).json({
        status: "FAIL",
        message: "There is no data with the specified id",
      });
    }

    // Extract the fields to update from the request body
    const { title, tag, content } = req.body;

    // Update the blog with the specified id using the Blog module
    const blog = await Blog.updateBlog({
      data: { title, tag, content },
      id: req.params.id,
    });

    // Return the updated blog as a JSON response with a success status
    res.status(200).json({
      status: "SUCCESS",
      message: "Blog info is successfully updated",
      data: {
        blog,
      },
    });
  } catch (error) {
    // Return an error response if an error occurs
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

// Deleting a blog
exports.deleteBlog = async (req, res) => {
  try {
    // Get the blog with the specified id using the Blog module
    const blog = await Blog.getBlog(req.params.id);

    // If the blog doesn't exist, return a failure response
    if (!blog) {
      return res.status(404).json({
        status: "FAIL",
        message: "There is no data with the specified id",
      });
    }
    // Call the deleteBlog function from the Blog model with the ID passed in the request parameters
    await Blog.deleteBlog(req.params.id);

    // Send a success response with a 200 status code and a success message
    res.status(200).json({
      status: "SUCCESS",
      message: "A blog is successfully deleted from the system",
    });
  } catch (error) {
    // If there's an error during the deletion, send an error response with a 400 status code and an error message
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};
