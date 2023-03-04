const asyncHandler = require('express-async-handler');
const MoviesModel = required('../model/moviesModel.js');
const MoviesService = require("../services/movies")


class MoviesController{
    constructor()

    add = asyncHandler(async (req, res) => {
        const { tittle, rating } = req.body;

        if (!tittle || !rating) {
            res.status(400);
      throw new Error("Provide all required field");
        }

        const isAdd = await MoviesService.addMovie(req.body);
        if (isAdd) {
            res.status(200).json({
                code: 200,
                message: "success", 
                data: result,
                quantity: result.length
            })
        }
    })

    getAll = asyncHandler(async (req, res) => {
        const movies = await MoviesService.getAllMovies(); 

        res.status(200).json({
            code: 200,
            message: "success",
            data: movies,
            quantity: movies.length
        })
    })
    async getOne(req,res){}
    async update(req,res){}
    async remove(req,res){}
}


module.exports = new MoviesController();