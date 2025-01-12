const hallsController = ({ createHallUseCase, listHallsUseCase }) => {
    return {
        createHall: async (req, res, next) => {
            try {
                const hallData = req.body;
                const hall = await createHallUseCase(hallData);
                res.status(201).json(hall);
            } catch (error) {
                next(error);
            }
        },
        listHalls: async (req, res, next) => {
            try {
                const halls = await listHallsUseCase();
                res.status(200).json(halls);
            } catch (error) {
                next(error);
            }
        },
    };
};

export default hallsController;
