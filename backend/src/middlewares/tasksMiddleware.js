const validateTitle = (request, response, next) => {
    const { body } = request

    if (body.title === undefined){
        return response.status(400).json({message: 'The field "title" is required'})
    }

    if (body.title === ''){
        return response.status(400).json({message: 'The field "title" cannot be empty'})
    }

    next()
}

const validateStatus = (request, response, next) => {
    const { body } = request

    if (body.status === undefined){
        return response.status(400).json({message: 'The field "status" is required'})
    }

    if (body.status === ''){
        return response.status(400).json({message: 'The field "status" cannot be empty'})
    }

    next()
}

const validateId = (request, response, next) => {
    const { id } = request.params

    if (id === undefined){
        return response.status(400).json({message: 'Id is required'})
    }

    if (id === ''){
        return response.status(400).json({message: 'Id is required'})
    }

    next()
}

module.exports = {
    validateTitle,
    validateStatus,
    validateId
}