const express = require('express')

const Helpers = require('./projects-model')

const router = express.Router()




router.get('/projects', (req, res)=>{
    Helpers.getProjects()
    .then( list => {
        res.status(200).json(list)
    })
    .catch( err => {
        res.status(500).json({ message: err.message})
    })
})

router.get('/resources', (req, res)=>{
    Helpers.getResources()
    .then( list => {
        res.status(200).json(list)
    })
    .catch( err => {
        res.status(500).json({ message: err.message})
    })
})

router.get('/tasks', (req, res)=>{
    Helpers.getTasks()
    .then( list => {
        res.status(200).json(list)
    })
    .catch( err => {
        res.status(500).json({ message: err.message})
    })
})

router.post('/projects', (req, res) =>{
    Helpers.addProjects(req.body)
    .then( added => {
        res.status(200).json(added)
    })
    .catch( err => {
        res.status(500).json({ message: err.message})
    })
})

router.post('/resources', (req, res) =>{
    Helpers.addResources(req.body)
    .then( added => {
        res.status(200).json(added)
    })
    .catch( err => {
        res.status(500).json({ message: err.message})
    })
})

router.post('/tasks', (req, res) =>{
    Helpers.addTasks(req.body)
    .then( added => {
        res.status(200).json(added)
    })
    .catch( err => {
        res.status(500).json({ message: err.message})
    })
})




module.exports = router