import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all tickets');
});

router.post('/', (req, res) => {
    res.send('Book a new ticket');
});

export default router;
