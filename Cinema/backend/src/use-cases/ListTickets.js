const listTickets = ({ ticketRepository }) => {
    return async () => {
        const tickets = await ticketRepository.getAll();
        return tickets;
    };
};

export default listTickets;
