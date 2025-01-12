const createHall = ({ hallRepository }) => {
    return async (hallData) => {
        const newHall = await hallRepository.add(hallData);
        return newHall;
    };
};

export default createHall;
