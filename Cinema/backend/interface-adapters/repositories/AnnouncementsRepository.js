class AnnouncementsRepository {
    constructor(database) {
        this.database = database;
    }

    async getAll() {
        const [rows] = await this.database.query('SELECT * FROM announcements');
        return rows;
    }

    async add(announcementData) {
        const [result] = await this.database.query('INSERT INTO announcements SET ?', announcementData);
        return { id: result.insertId, ...announcementData };
    }
}

export default AnnouncementsRepository;
