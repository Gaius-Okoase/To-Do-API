import express from 'express'
import { getAllToDo, submitToDo } from '../controller/toDoController.js';

const router = express.Router();

router.get('/', getAllToDo);
router.post('/', submitToDo);

export default router;
