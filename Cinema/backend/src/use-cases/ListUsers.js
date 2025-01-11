const listUsers = ({ userRepository }) => {
    return async () => {
        const users = await userRepository.getAll();
        return users;
    };
};

export default listUsers;
