const listHalls = ({ hallRepository }) => {
    return async () => {
        const halls = await hallRepository.getAll();
        return halls;
    };
};

export default listHalls;
