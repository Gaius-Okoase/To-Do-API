import express from 'express'
import { deleteToDo, getAllToDo, submitToDo, updateToDo } from '../controller/toDoController.js';

const router = express.Router();

router.get('/', getAllToDo);
router.post('/', submitToDo);
router.delete('/:id', deleteToDo);
router.put('/:id', updateToDo);

export default router;
