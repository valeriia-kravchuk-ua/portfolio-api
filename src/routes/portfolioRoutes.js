import {Router} from 'express';
import {getAllData} from "../controllers/portfolioController.js";



const router = Router();

router.get('/', getAllData);

export default router;