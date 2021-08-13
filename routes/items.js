const express = require('express');
const router = express.Router();
const db = require("./mysql-connection");
const Dbconnection = new db('mysqlraimondstest');
//GET all data
router.get('/', async (req, res) => {
    let data = await Dbconnection.getAll();
    res.status(200).json(data)
})

//GET a specific data item (person)
router.get('/:id', async (req, res) => {
    let found =  await Dbconnection.getById(req.params.id);
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404)
    }
})

//POST - create a new person
router.post('/',async (req, res) => {
    let newItem = {
        name: req.body.first_name,
        surname: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
    }
    await Dbconnection.create(newItem);
    res.sendStatus(204);
})

//PUT - update a specific user
router.put('/:id',async (req, res) => {
    let updatedItem = {
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
    }
    await Dbconnection.update(updatedItem);
    res.sendStatus(204)
})

//DELETE - delete a specific user
router.delete('/:id',async  (req, res) => {
    await Dbconnection.delete(req.params.id);
    res.sendStatus(204)
})

module.exports = router