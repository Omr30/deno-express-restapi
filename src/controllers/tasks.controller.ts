import {Request, Response} from 'npm:express'
import Task from '../models/task.model.ts'

export const getTasks = async(_req: Request, res :Response) => {
    const tasks = await Task.find();
    res.json(tasks);
}

export const createTask = async(req: Request, res :Response) => {
    const newTask = await Task.create(req.body);
    res.json(newTask);
}

export const updateTask = async(req: Request, res :Response) => {
    const taskUpdate = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    return res.json(taskUpdate);
}

export const deleteTask = async(req: Request, res :Response) => {
    const taskDeketed = await Task.findByIdAndRemove(req.params.id);
    return res.json(taskDeketed);
    
}

export const getTask = async(req: Request, res :Response) => {
    
    const task = await Task.findById(req.params.id);
    res.json(task);
    
}
