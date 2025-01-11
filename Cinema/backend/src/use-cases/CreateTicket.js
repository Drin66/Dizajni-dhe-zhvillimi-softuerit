const createTicket = ({ ticketRepository }) => {
    return async (ticketData) => {
        const newTicket = await ticketRepository.add(ticketData);
        return newTicket;
    };
};

export default createTicket;
