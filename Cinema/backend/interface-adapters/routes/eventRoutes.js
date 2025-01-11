import express from 'express';
import db from '../../frameworks-drivers/database/mysql.js';
import EventRepository from '../../interface-adapters/repositories/EventRepository.js';
import createEvent from '../../src/use-cases/CreateEvent.js';
import listEvents from '../../src/use-cases/ListEvents.js';
import eventController from '../../interface-adapters/controllers/EventController.js';

const router = express.Router();

const eventRepository = new EventRepository(db);

const controller = eventController({
    createEventUseCase: createEvent({ eventRepository }),
    listEventsUseCase: listEvents({ eventRepository }),
});

router.post('/', controller.createEvent);
router.get('/', controller.listEvents);

export default router;
