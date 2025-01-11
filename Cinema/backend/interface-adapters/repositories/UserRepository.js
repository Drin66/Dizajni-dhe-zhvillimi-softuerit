class UserRepository {
    constructor(database) {
        this.database = database;
    }

    async getAll() {
        const [rows] = await this.database.query('SELECT * FROM users');
        return rows;
    }

    async add(userData) {
        const [result] = await this.database.query('INSERT INTO users SET ?', userData);
        return { id: result.insertId, ...userData };
    }

    async getById(userId) {
        const [rows] = await this.database.query('SELECT * FROM users WHERE id = ?', [userId]);
        return rows[0];
    }
}

export default UserRepository;
