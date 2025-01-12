import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all announcements');
});

router.post('/', (req, res) => {
    res.send('Create a new announcement');
});

export default router;
