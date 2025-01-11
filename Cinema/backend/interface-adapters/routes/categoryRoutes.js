import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all categories');
});

router.post('/', (req, res) => {
    res.send('Create a new category');
});

export default router;
