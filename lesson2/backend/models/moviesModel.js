//схема - опис з чого складається наша модель
//модель - об*єкт,  який зберігається в базі данних

const { model, Schema } = require("mongoose");

const moviesSchema = Schema({
  title: {
    required: [true, "db:title is required"],
    type: String,
  },
  year: {
    type: Number,
    default: 1990,
  },
  rating: {
    required: [true, "db:title is required"],
    type: Number,
  },
  director: {
    type: String,
    default: "Quentin Tarantyno",
  },
});

module.exports = model("Movies", moviesSchema);
