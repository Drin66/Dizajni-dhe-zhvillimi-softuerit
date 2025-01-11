class TicketRepository {
    constructor(database) {
        this.database = database;
    }

    async getAll() {
        const [rows] = await this.database.query('SELECT * FROM tickets');
        return rows;
    }

    async add(ticketData) {
        const [result] = await this.database.query('INSERT INTO tickets SET ?', ticketData);
        return { id: result.insertId, ...ticketData };
    }

    async getByMovie(movieId) {
        const [rows] = await this.database.query('SELECT * FROM tickets WHERE movieId = ?', [movieId]);
        return rows;
    }
}

export default TicketRepository;
