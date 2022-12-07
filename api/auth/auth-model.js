const db = require('../../data/dbConfig');

async function getById(id){
    return await db('users')
        .where({id})
        .first()
}

async function getByName(username){
    const prevUser = await db('users')
        .where('username','=', username)
        .first()
    return prevUser
}

async function add(newUser){
    const [newGuyGirl] = await db('users')
        .insert(newUser)
    const result = await getById(newGuyGirl)
    return result
}

module.exports = {
    add,
    getById,
    getByName
}