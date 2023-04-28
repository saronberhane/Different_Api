const BookStore = require("./dal");

//creating a new book
exports.createBook = async (req, res) => {
  try {
    const {
      booksTitle,
      booksAuthor,
      booksDescription,
      booksPrice,
      booksGenre,
      booksPage,
    } = req.body;

    if (
      !booksTitle ||
      !booksAuthor ||
      !booksDescription ||
      !booksPrice ||
      !booksGenre ||
      !booksPage
    ) {
      return res.status(400).json({
        status: "ERROR",
        message: "Please provide the required informations",
      });
    }

    //creating a new book using the book module
    const newBook = await BookStore.createBook({
      booksTitle,
      booksAuthor,
      booksDescription,
      booksPrice,
      booksGenre,
      booksPage,
    });

    //returning the new book input as a json response
    res.status(200).json({
      status: "SUCCESS",
      message: "The new book was added successfully",
      data: {
        book: newBook,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
};

//get a book
exports.getBook = async (req, res) => {
  try {
    const book = await BookStore.getBook(req.params.id);

    if (!book) {
      return res.status(404).json({
        status: "FAIL",
        message: "There is no book with this id",
      });
    }

    res.status(200).json({
      status: "SUCCESS",
      data: {
        book,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

//get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await BookStore.getAllBooks();

    res.status(200).json({
      status: "SUCCESS",
      data: {
        books,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

//update book
exports.updateBook = async (req, res) => {
  try {
    const getBook = await BookStore.getBook(req.params.id);

    if (!getBook) {
      return res.status(404).json({
        status: "FAIL",
        message: "There is no book with this id",
      });
    }

    const {
      booksTitle,
      booksAuthor,
      booksDescription,
      booksPrice,
      booksGenre,
      booksPage,
    } = req.body;

    const book = await BookStore.updateBook({
      data: {
        booksTitle,
        booksAuthor,
        booksDescription,
        booksPrice,
        booksGenre,
        booksPage,
      },
      id: req.params.id,
    });

    res.status(200).json({
      status: "SUCCESS",
      message: "Book information is successfully updated",
      data: {
        book,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

//delete a book
exports.deleteBook = async (req, res) => {
  try {
    const book = await BookStore.getBook(req.params.id);

    if (!book) {
      return res.status(404).json({
        status: "FAIL",
        message: "There is no book with this id",
      });
    }
    await BookStore.deleteBook(req.params.id);

    res.status(200).json({
      status: "SUCCESS",
      message: "The book is successfully deleted",
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};

//delete all books
exports.deleteAllBooks = async (req, res) => {
  try {
    const books = await BookStore.deleteAllBooks();
    res.status(200).json({
      status: "SUCCESS",
      message: "The books are deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "ERROR",
      message: error.message,
    });
  }
};
