import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get('/movies');
            setMovies(response.data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const addMovie = async () => {
        try {
            const response = await axios.post('/movies', { title });
            setMovies([...movies, response.data]);
            setTitle('');
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    const updateMovie = async (id, updatedTitle) => {
        try {
            const response = await axios.put(`/movies/${id}`, { title: updatedTitle });
            setMovies(movies.map(movie => (movie.id === id ? response.data : movie)));
        } catch (error) {
            console.error('Error updating movie:', error);
        }
    };

    const deleteMovie = async (id) => {
        try {
            await axios.delete(`/movies/${id}`);
            setMovies(movies.filter(movie => movie.id !== id));
        } catch (error) {
            console.error('Error deleting movie:', error);
        }
    };

    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        {movie.title}
                        <button onClick={() => updateMovie(movie.id, prompt('Enter new title:'))}>Update</button>
                        <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter movie title"
            />
            <button onClick={addMovie}>Add Movie</button>
        </div>
    );
};

export default Movies;
