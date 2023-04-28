const { Schema, model } = require("mongoose");

const bookStoreSchema = new Schema(
  {
    booksTitle: {
      type: String,
      required: [true, "Title of book is required"],
    },

    booksAuthor: {
      type: String,
      required: [true, "Author of book is required"],
    },

    booksDescription: {
      type: String,
      required: [true, "Please provide a description of the book"],
    },

    booksPrice: {
      type: Number,
      required: [true, "Price of book is required"],
    },

    booksGenre: {
      type: String,
      require: [true, "Please provide the genre of the book"],
    },

    booksPage: {
      type: String,
      required: [true, "The Page number of the book is required"],
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

const BookStore = model("BookStore", bookStoreSchema);

module.exports = BookStore;
