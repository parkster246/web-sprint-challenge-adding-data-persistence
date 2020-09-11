const db = require('../data/db-config')
const { select } = require('../data/db-config')


module.exports = {
    getResources, 
    addResources, 
    getProjects, 
    addProjects,
    getTasks, 
    addTasks
}
function getResources(){
    return db('resources')
}
function addResources(newResource){
    return db('resources').insert(newResource)
}
function getProjects(){
    return db('projects')
}
function addProjects(newProject){
    return db('projects').insert(newProject)
}

function getTasks(){
    return db('projects as p')
    .join('tasks as t' , 'p.id', 't.project_id')
    .select('p.name', 't.id', 'p.project_description', 't.task_description', 't.notes', 't.task_completed')
}

function addTasks(newTask){
    return db('tasks').insert(newTask)
}