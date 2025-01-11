const movieController = ({ createMovieUseCase, listMoviesUseCase }) => {
    return {
        createMovie: async (req, res, next) => {
            try {
                const movieData = req.body;
                const movie = await createMovieUseCase(movieData);
                res.status(201).json(movie);
            } catch (error) {
                next(error);
            }
        },
        listMovies: async (req, res, next) => {
            try {
                const movies = await listMoviesUseCase();
                res.status(200).json(movies);
            } catch (error) {
                next(error);
            }
        },
    };
};

export default movieController;
