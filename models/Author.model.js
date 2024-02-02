const { Schema, model } = require("mongoose");

const AuthorSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: { type: String, required: true },
    name: { type: String },

    // book: {
    //   type: Schema.Types.Object,
    //   ref: "book",
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = model("Author", AuthorSchema);
