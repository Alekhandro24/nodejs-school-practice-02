const asyncHandler = require("express-async-handler");
// const MoviesModel = require("../models/moviesModel");
const MoviesService = require("../services/movies");

class MoviesController {
  // add = asyncHandler(async (req, res) => {
  //   const { title, rating } = req.body;

  //   if (!title || !rating) {
  //     res.status(400);
  //     throw new Error("Provide all required field");
  //   }
  //   const result = await MoviesModel.create({ ...req.body });

  //   if (!result) {
  //     res.status(400);
  //     throw new Error("Unable to save into DB");
  //   }

  //   res.status(201).json({
  //     code: 201,
  //     message: "success",
  //     data: result,
  //   });
  // });

  add = asyncHandler(async (req, res) => {
    const { title, rating } = req.body;

    if (!title || !rating) {
      res.status(400);
      throw new Error("Provide all required field");
    }

    const result = await MoviesService.addMovie(req.body);
    if (result) {
      res.status(201).json({
        code: 201,
        message: "success",
        data: result,
        quantity: result.length,
      });
    }
  });

  // await MoviesModels.create({ ...req.body }); //бо 1 фільм, тому 1 файл-об*єкт

  // getAll = asyncHandler(async (req, res) => {
  //   const result = await MoviesModel.find({});

  //   if (!result) {
  //     res.status(400);
  //     throw new Error("Unable to fetch");
  //   }

  //   res.status(200).json({
  //     code: 200,
  //     message: "success",
  //     data: result,
  //     quantity: result.length,
  //   });
  // });
  getAll = asyncHandler(async (req, res) => {
    const movies = await MoviesService.getAllMovies();

    res.status(200).json({
      code: 200,
      message: "success",
      data: movies,
      quantity: movies.length,
    });
  });
  // getAll(req, res) {}
  getOne(req, res) {}
  update(req, res) {}
  remove(req, res) {}
}

module.exports = new MoviesController();
