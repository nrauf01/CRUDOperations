const router = require("express").Router();
router.use("/author", require("./author.router"));
router.use("/book", require("./books.router"));
module.exports = router;
