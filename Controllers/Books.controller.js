const BooksModel = require("../models/Book.model");

const AddBook = async (req, res, next) => {
  const { title, category, publish_date } = req.body;
  if (!(title && category && publish_date)) {
    return res
      .status(400)
      .json({ error: "Error", message: "Fill All input fields" });
  } else {
    try {
      const Book = new BooksModel({ ...req.body, author: req.authorId });
      console.log(req.authorId);
      await Book.save();

      return res.status(200).json(Book);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "internal server error" });
    }
  }
};

const GetSingle = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await BooksModel.findById(id);
    if (!user) {
      return res
        .status(400)
        .json({ error: "Error", message: "User not found" });
    } else {
      return res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
};

const getAll = async (req, res, next) => {
  const books = await BooksModel.find({});
  try {
    return res.status(200).send(books);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "internal server error" });
  }
};

module.exports = { AddBook, GetSingle, getAll };
