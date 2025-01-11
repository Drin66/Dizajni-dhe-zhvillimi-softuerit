class EventRepository {
    constructor(database) {
        this.database = database;
    }

    async getAll() {
        const [rows] = await this.database.query('SELECT * FROM events');
        return rows;
    }

    async add(eventData) {
        const [result] = await this.database.query('INSERT INTO events SET ?', eventData);
        return { id: result.insertId, ...eventData };
    }
}

export default EventRepository;
