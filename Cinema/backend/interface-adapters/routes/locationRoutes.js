import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all locations');
});

router.post('/', (req, res) => {
    res.send('Create a new location');
});

export default router;
