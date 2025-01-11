const listEvents = ({ eventRepository }) => {
    return async () => {
        const events = await eventRepository.getAll();
        return events;
    };
};

export default listEvents;
