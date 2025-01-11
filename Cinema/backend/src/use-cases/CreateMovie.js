const createMovie = ({ movieRepository }) => {
    return async (movieData) => {
        const newMovie = await movieRepository.add(movieData);
        return newMovie;
    };
};

export default createMovie;
