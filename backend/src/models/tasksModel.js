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

    return {id: createdTask.insertId}
}

module.exports = {
    getAll,
    createTask
}