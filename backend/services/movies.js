const MoviesModel = require("../model/moviesModel");

class MoviesService {
  getAllMovies = async () => {
    const result = await MoviesServiceModel.find({});
    if (!result) {
      res.status(400);
      throw new Error("Provide all required field");
    }
    return result;
  };

  addMovie = async (data) => {
    const result = await MoviesModel.create({ ...data });
    if (!result) {
      res.status(400);
      throw new Error("Provide all required field");
    }
    return result;
  };
}

module.exports = new MoviesService();
