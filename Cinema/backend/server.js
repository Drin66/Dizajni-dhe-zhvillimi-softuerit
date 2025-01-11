import express from 'express';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

import db from './frameworks-drivers/database/mysql.js';
import userRoutes from './interface-adapters/routes/userRoutes.js';
import categoryRoutes from './interface-adapters/routes/categoryRoutes.js';
import movieRoutes from './interface-adapters/routes/movieRoutes.js';
import ticketRoutes from './interface-adapters/routes/ticketRoutes.js';
import eventRoutes from './interface-adapters/routes/eventRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(session({
    secret: 'your-session-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/movies', movieRoutes);
app.use('/tickets', ticketRoutes);
app.use('/events', eventRoutes);

app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal Server Error', details: err });
});

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
