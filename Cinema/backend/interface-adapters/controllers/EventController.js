const eventController = ({ createEventUseCase, listEventsUseCase }) => {
    return {
        createEvent: async (req, res, next) => {
            try {
                const eventData = req.body;
                const event = await createEventUseCase(eventData);
                res.status(201).json(event);
            } catch (error) {
                next(error);
            }
        },
        listEvents: async (req, res, next) => {
            try {
                const events = await listEventsUseCase();
                res.status(200).json(events);
            } catch (error) {
                next(error);
            }
        },
    };
};

export default eventController;
