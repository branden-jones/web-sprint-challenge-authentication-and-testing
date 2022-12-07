const db = require('../../data/dbConfig');

async function add(newUser){
    const newGuyGirl = await db('users')
        .insert(newUser)
    return newGuyGirl
}

module.exports = {
    add
}