const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const divisionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  identity: {
    type: String,
    required: true,
  },
  subdivisions: {
    type: Array,
  },
  category: {
    type: Number,
  },
});

const Division = mongoose.model("Division", divisionSchema, "divisions");
module.exports = Division;
