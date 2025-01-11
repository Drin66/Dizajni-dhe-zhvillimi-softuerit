const listCategories = ({ categoryRepository }) => {
    return async () => {
        const categories = await categoryRepository.getAll();
        return categories;
    };
};

export default listCategories;
