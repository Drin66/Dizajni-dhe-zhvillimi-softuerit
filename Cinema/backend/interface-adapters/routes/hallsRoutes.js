import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all halls');
});

router.post('/', (req, res) => {
    res.send('Create a new hall');
});

export default router;
