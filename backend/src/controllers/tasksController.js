const tasksModel = require('../models/tasksModel')

const getAll = async (request, response) => {
    const tasks = await tasksModel.getAll()
    return response.status(200).json(tasks)
}

const getTask = async (request, response) => {
    const { id } = request.params
    const task = await tasksModel.getTask(id)
    if (task.length === 0){return response.status(404).json({message: 'Id not found'})}
    return response.status(200).json(task)
}

const createTask = async (request, response) => {
    const createdTask = await tasksModel.createTask(request.body)
    return response.status(201).json(createdTask)
}

const deleteTask = async (request, response) => {
    const { id } = request.params
    await tasksModel.deleteTask(id)
    
    return response.status(204).json()
}

const updateTask = async (request, response) => {
    const { id } = request.params
    await tasksModel.updateTask(id, request.body)
    
    return response.status(204).json()
}

module.exports = {
    getAll,
    getTask,
    createTask,
    deleteTask,
    updateTask
}