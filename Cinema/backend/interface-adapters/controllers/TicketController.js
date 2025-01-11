const ticketController = ({ createTicketUseCase, listTicketsUseCase }) => {
    return {
        createTicket: async (req, res, next) => {
            try {
                const ticketData = req.body;
                const ticket = await createTicketUseCase(ticketData);
                res.status(201).json(ticket);
            } catch (error) {
                next(error);
            }
        },
        listTickets: async (req, res, next) => {
            try {
                const tickets = await listTicketsUseCase();
                res.status(200).json(tickets);
            } catch (error) {
                next(error);
            }
        },
    };
};

export default ticketController;
