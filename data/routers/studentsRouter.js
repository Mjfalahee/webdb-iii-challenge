const express = require('express');
const router = express.Router();

const studentsDB = require('../helpers/studentsHelp');

// get all the students
router.get('/', async (req, res) => {
    try {
        const students = await studentsDB.find();
        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error retrieving the students from the database.'
        });
    }
});

// get specific student
router.get('/:id', async (req, res) => {
    try {
        const student = await studentsDB.findById(req.params.id);
        res.status(200).json(student); 
    }
    catch (error) {
        res.status(500).json({
            message: 'Error retrieving the student.'
        });
    }
});

//add a student
router.post('/', async (req,res) => {
    try {
        const student = await studentsDB.insert(req.body);
        res.status(201).json(student);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error creating a new student.'
        });
    }
});

//update a student
router.put('/:id', async (req, res) => {
    try {
        const updated = await studentsDB.update(req.params.id, req.body);
        res.status(200).json({updated});
    }
    catch (error) {
        res.status(500).json({
            message: 'The student was unable to be updated.'
        });
    }
});

//delete a student
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await studentsDB.remove(req.params.id);
        res.status(200).json({
            message: 'student deleted.'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'student was unable to be deleted.'
        })
    }
})

module.exports = router;
