const createUser = ({ userRepository }) => {
    return async (userData) => {
        const newUser = await userRepository.add(userData);
        return newUser;
    };
};

export default createUser;
