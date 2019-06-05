const express = require('express');
const router = express.Router();

const cohortDB = require('../helpers/cohortHelp');

// get all the cohorts
router.get('/', async (req, res) => {
    try {
        const cohorts = await cohortDB.find();
        res.status(200).json(cohorts);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error retrieving the cohorts from the database.'
        });
    }
});

//get specific cohort
router.get('/:id', async (req, res) => {
    try {
        const cohort = await cohortDB.findById(req.params.id);
        res.status(200).json(cohort); 
    }
    catch (error) {
        res.status(500).json({
            message: 'Error retrieving the cohort.'
        });
    }
});

//get students from cohort
router.get('/:id/students', async (req, res) => {
    try {
        const students = await cohortDB.getStudentsByCohortID(req.params.id);
        res.status(200).json(students);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error retrieving the students.'
        });
    }
});

//add a cohort
router.post('/', async (req,res) => {
    try {
        const cohort = await cohortDB.insert(req.body);
        res.status(201).json(cohort);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error creating a new cohort.'
        })
    }
});

//update a cohort
router.put('/:id', async (req, res) => {
    try {
        const updated = await cohortDB.update(req.params.id, req.body);
        res.status(200).json({updated});
    }
    catch (error) {
        res.status(500).json({
            message: 'The cohort was unable to be updated.'
        });
    }
});

//delete a cohort
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await cohortDB.remove(req.params.id);
        res.status(200).json({
            message: 'Cohort deleted.'
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Cohort was unable to be deleted.'
        })
    }
})






module.exports = router;
