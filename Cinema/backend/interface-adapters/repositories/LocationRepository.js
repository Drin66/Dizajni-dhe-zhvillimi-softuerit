class LocationRepository {
    constructor(database) {
        this.database = database;
    }

    async getAll() {
        const [rows] = await this.database.query('SELECT * FROM locations');
        return rows;
    }

    async add(locationData) {
        const [result] = await this.database.query('INSERT INTO locations SET ?', locationData);
        return { id: result.insertId, ...locationData };
    }
}

export default LocationRepository;
