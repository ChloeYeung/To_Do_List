
const knexInstance = require("../bin/database")
async function getTodoList (userId){
    let lists = await knexInstance("lists").where({ user_id: userId }).select("id","list").orderBy('id');
    return [...lists]
}

async function addTodoItem (userId, item){
    let add = await knexInstance('lists').insert({ user_id: userId, list: item }).returning('id')
    if(add.length === 0){
        throw new Error("Database fail in insertion")
    }
    let newItemId = add[0].id
    let newItem = await knexInstance("lists").where({ id: newItemId }).select("id","list").first()
    return newItem
}

module.exports = {
    getTodoList,
    addTodoItem
}