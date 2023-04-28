const BookStoreModel = require("./model");

class BookStore {
  //create a book
  static async createBook(data) {
    try {
      const newBook = BookStoreModel.create({
        booksTitle: data.booksTitle,
        booksAuthor: data.booksAuthor,
        booksDescription: data.booksDescription,
        booksPrice: data.booksPrice,
        booksGenre: data.booksGenre,
        booksPage: data.booksPage,
      });
      return newBook;
    } catch (error) {
      throw error;
    }
  }

  //get a book
  static async getBook(id) {
    try {
      const book = await BookStoreModel.findById(id);
      return book;
    } catch (error) {
      throw error;
    }
  }

  //get all books
  static async getAllBooks() {
    try {
      const books = await BookStoreModel.find();
      return books;
    } catch (error) {
      throw error;
    }
  }

  //update a book
  static async updateBook({ data, id }) {
    try {
      const book = await BookStoreModel.findByIdAndUpdate(
        id,
        {
          booksTitle: data.booksTitle,
          booksAuthor: data.booksAuthor,
          booksDescription: data.booksDescription,
          booksPrice: data.booksPrice,
          booksGenre: data.booksGenre,
          booksPage: data.booksPage,
        },
        { runValidators: true, new: true }
      );
      return book;
    } catch (error) {
      throw error;
    }
  }

  // delete a book
  static async deleteBook(id) {
    try {
      await BookStoreModel.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }

  // delet all books
  static async deleteAllBooks() {
    try {
      await BookStoreModel.deleteMany({});
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BookStore;
