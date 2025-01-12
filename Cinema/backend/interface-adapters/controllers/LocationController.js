const locationController = ({ createLocationUseCase, listLocationsUseCase }) => {
    return {
        createLocation: async (req, res, next) => {
            try {
                const locationData = req.body;
                const location = await createLocationUseCase(locationData);
                res.status(201).json(location);
            } catch (error) {
                next(error);
            }
        },
        listLocations: async (req, res, next) => {
            try {
                const locations = await listLocationsUseCase();
                res.status(200).json(locations);
            } catch (error) {
                next(error);
            }
        },
    };
};

export default locationController;
