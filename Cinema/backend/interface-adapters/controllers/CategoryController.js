const categoryController = ({ createCategoryUseCase, listCategoriesUseCase }) => {
    return {
        createCategory: async (req, res, next) => {
            try {
                const categoryData = req.body;
                const category = await createCategoryUseCase(categoryData);
                res.status(201).json(category);
            } catch (error) {
                next(error);
            }
        },
        listCategories: async (req, res, next) => {
            try {
                const categories = await listCategoriesUseCase();
                res.status(200).json(categories);
            } catch (error) {
                next(error);
            }
        },
    };
};

export default categoryController;
