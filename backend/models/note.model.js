const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    divisionID: {
      type: String,
      require: true,
    },
    identifier: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
