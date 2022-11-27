import {Router} from 'npm:express'
import { getTasks, getTask, createTask, deleteTask, updateTask } from '../controllers/tasks.controller.ts';

const router = Router();

router.get('/tasks', getTasks)
router.get('/tasks/:id', getTask)
router.post('/tasks', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)


export default router