const userController = ({ createUserUseCase, listUsersUseCase }) => {
    return {
        createUser: async (req, res, next) => {
            try {
                const userData = req.body;
                const user = await createUserUseCase(userData);
                res.status(201).json(user);
            } catch (error) {
                next(error);
            }
        },
        listUsers: async (req, res, next) => {
            try {
                const users = await listUsersUseCase();
                res.status(200).json(users);
            } catch (error) {
                next(error);
            }
        },
    };
};

export default userController;
