// const Cat = mongoose.model("Cat", { name: String });
// const kitty = new Cat({ name: "Zildjian" });

const { model, Schema } = require("mongoose");
const moviesSchema = Schema({
  title: {
    required: [true, "db: tittle is required"],
    type: String,
  },
  director: {
    type: String,
    default: "Quentin Tarantino",
  },
  yeart: {
    type: Number,
    default: 1990,
  },
  rating: {
    required: [true, "db: rating is required"],
    type: Number,
  },
});

module.exports = model("Movies", moviesSchema);
