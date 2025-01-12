const createLocation = ({ locationRepository }) => {
    return async (locationData) => {
        const newLocation = await locationRepository.add(locationData);
        return newLocation;
    };
};

export default createLocation;
