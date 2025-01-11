const listMovies = ({ movieRepository }) => {
    return async () => {
        const movies = await movieRepository.getAll();
        return movies;
    };
};

export default listMovies;
