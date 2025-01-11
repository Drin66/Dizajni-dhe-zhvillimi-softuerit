class MovieRepository {
    constructor(database) {
        this.database = database;
    }

    async getAll() {
        const [rows] = await this.database.query('SELECT * FROM movies');
        return rows;
    }

    async add(movieData) {
        const [result] = await this.database.query('INSERT INTO movies SET ?', movieData);
        return { id: result.insertId, ...movieData };
    }

    async getByCategory(categoryId) {
        const [rows] = await this.database.query('SELECT * FROM movies WHERE categoryId = ?', [categoryId]);
        return rows;
    }
}

export default MovieRepository;
