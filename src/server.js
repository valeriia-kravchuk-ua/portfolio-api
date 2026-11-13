import 'dotenv/config';
import express from 'express';
import connectDatabase from './config/database.js';
import projectRoutes from "./routes/projectRoutes.js";
import portfolioRoutes from './routes/portfolioRoutes.js';
import {errorHandler} from "./middlewares/errorHandler.js";
import {notFoundHandler} from "./middlewares/notFound.js";
import {errors} from "celebrate";
import cors from 'cors';



const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
    });
});

app.use('/projects', projectRoutes);
app.use('/portfolio', portfolioRoutes);

// Errors — celebrate errors first, then 404, then generic
app.use(errors())
app.use(notFoundHandler)
app.use(errorHandler)

const startServer = async () => {
    await connectDatabase();
    try {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Server failed to start:', err)
        process.exit(1)
    }

};

startServer();