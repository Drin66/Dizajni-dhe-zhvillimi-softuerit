const createEvent = ({ eventRepository }) => {
    return async (eventData) => {
        const newEvent = await eventRepository.add(eventData);
        return newEvent;
    };
};

export default createEvent;
