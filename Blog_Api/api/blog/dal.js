// Import the Blog module from the model
const BlogModel = require("./model");

class Blog {
  // Create a Blog
  static async createBlog(data) {
    try {
      // Create a new Blog using the BlogModel.create method, and pass in the data as an argument
      const newBlog = BlogModel.create({
        title: data.title,
        tag: data.tag,
        author: data.author,
        content: data.content,
      });
      return newBlog;
    } catch (error) {
      // If there is an error, throw it
      throw error;
    }
  }

  //Get all blogs
  static async getAllBlog() {
    try {
      // Get all the Blogs using the BlogModel.find method
      const blogs = await BlogModel.find();
      return blogs;
    } catch (error) {
      // If there is an error, throw it
      throw error;
    }
  }

  // Get a single blog
  static async getBlog(id) {
    try {
      // Find a Blog by ID using the BlogModel.findById method
      const blog = await BlogModel.findById(id);
      return blog;
    } catch (error) {
      // If there is an error, throw it
      throw error;
    }
  }

  //update a blog
  static async updateBlog({ data, id }) {
    try {
      // Find a Blog by ID and update it with the new data using the BlogModel.findByIdAndUpdate method
      const blog = await BlogModel.findByIdAndUpdate(
        id,
        {
          title: data.title,
          tag: data.tag,
          author: data.author,
          content: data.content,
        },
        // Ensure validation is run and the new, updated document is returned
        { runValidators: true, new: true }
      );
      return blog;
    } catch (error) {
      // If there is an error, throw it
      throw error;
    }
  }

  //Delete a blog
  static async deleteBlog(id) {
    try {
      // Find a Blog by ID and delete it using the BlogModel.findByIdAndDelete method
      await BlogModel.findByIdAndDelete(id);
    } catch (error) {
      // If there is an error, throw it
      throw error;
    }
  }

  //Delete all blog
  static async deleteAllBlog(id) {
    try {
      // Delete all the Blogs using the BlogModel.deleteMany method
      await BlogModel.deleteMany({});
    } catch (error) {
      // If there is an error, throw it
      throw error;
    }
  }
}

// Export the Blog class
module.exports = Blog;
