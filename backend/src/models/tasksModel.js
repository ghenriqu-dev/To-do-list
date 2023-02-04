const connection = require('./connection')

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks')
    return tasks
}

const createTask = async (task) => {
    const { title } = task
    const date = new Date(Date.now()).toUTCString()
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)'

    const [createdTask] = await connection.execute(query, [title, 'Pendente', date])

    return {id: createdTask.insertId, title: task.title}
}

const deleteTask = async (id) => {
    await connection.execute('DELETE FROM tasks WHERE id = ?', [id])
    return id
}

const updateTask = async (id, task) => {
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'
    const { title, status } = task

    const updatedTask = await connection.execute(query, [title, status, id])
    return updatedTask
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}