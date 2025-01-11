const createCategory = ({ categoryRepository }) => {
    return async (categoryData) => {
        const newCategory = await categoryRepository.add(categoryData);
        return newCategory;
    };
};

export default createCategory;
