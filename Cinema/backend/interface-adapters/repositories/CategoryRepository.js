class CategoryRepository {
    constructor(database) {
        this.database = database;
    }

    async getAll() {
        const [rows] = await this.database.query('SELECT * FROM categories');
        return rows;
    }

    async add(categoryData) {
        const [result] = await this.database.query('INSERT INTO categories SET ?', categoryData);
        return { id: result.insertId, ...categoryData };
    }
}

export default CategoryRepository;
