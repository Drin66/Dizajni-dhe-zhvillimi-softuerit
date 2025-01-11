import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all movies');
});

router.post('/', (req, res) => {
    res.send('Add a new movie');
});

export default router;
