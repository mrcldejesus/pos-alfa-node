const express = require('express');
const router = express.Router();
const CRUD = require('./crud')

router.get('/', Controller.find) 
//router.get('/:id', Controller.findOne) 
router.post('/', Controller.create) 
//router.put('/:id', Controller.update) 
//router.delete('/:id', Controller.remove) 

module.exports = router;