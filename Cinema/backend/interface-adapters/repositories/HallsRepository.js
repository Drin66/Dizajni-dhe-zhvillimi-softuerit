class HallsRepository {
    constructor(database) {
        this.database = database;
    }

    async getAll() {
        const [rows] = await this.database.query('SELECT * FROM halls');
        return rows;
    }

    async add(hallData) {
        const [result] = await this.database.query('INSERT INTO halls SET ?', hallData);
        return { id: result.insertId, ...hallData };
    }
}

export default HallsRepository;
