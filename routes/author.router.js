var express = require("express");

const {
  deleteAuthor,
  createAuthor,
  getAll,
  updateOne,
  getSingle,
  singin,
} = require("../Controllers/Authors.controller");

var router = express.Router();

router.delete("/:id", deleteAuthor);

router.put("/:id", updateOne);

router.get("/:id", getSingle);

router.post("/register", createAuthor);

router.post("/signin", singin);

router.get("/", getAll);

module.exports = router;
