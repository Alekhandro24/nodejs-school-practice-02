//  http://localhost:5050/api/v1/movies

const express = require("express");
const moviesRouter = express.Router();

const moviesController = require("../controllers/MoviesController");

// добавити один фільм
moviesRouter.post(
  "/movies",
  (req, res, next) => {
    console.log("Joi started");
    next();
  },
  moviesController.add
);

// отримати всі

moviesRouter.get("/movies", moviesController.getAll);

// отримати один фільм

moviesRouter.get("/movies/:id", moviesController.getOne);

// обновити фільм

moviesRouter.put("/movies/:id", moviesController.update);

// удалити фільм

moviesRouter.delete("/movies/:id", moviesController.remove);

module.exports = moviesRouter;
