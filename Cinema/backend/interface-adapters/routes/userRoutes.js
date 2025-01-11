import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all users');
});

router.post('/', (req, res) => {
    res.send('Create a new user');
});

export default router;
