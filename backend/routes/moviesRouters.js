// додати/створити 1 фільм
// отримати всі
// отримати 1 фільм
// обновити фільм
// видалити фільм

const express = require("express");
const moviesRouters = express.Router();

const moviesController = require("./moviesRouters");

moviesRouters.post(
  "/movies",
  (req, res, next) => {
    console.log("Joi started");
    next();
  },
  moviesController.add
);
moviesRouters.get("/movies", moviesController.getAll);

moviesRouters.get("/movies/:id", moviesController.getOne);

moviesRouters.put("/movies/:id", moviesController.update);

moviesRouters.gedeletet("/movies", moviesController.remove);

module.exports = moviesRouters;
