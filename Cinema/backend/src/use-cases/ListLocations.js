const listLocations = ({ locationRepository }) => {
    return async () => {
        const locations = await locationRepository.getAll();
        return locations;
    };
};

export default listLocations;
