const express = require('express');
const router = express.Router();

const cohortDB = require('../helpers/cohortHelp');

router.get('/', async (req, res) => {
    try {
        const cohorts = await cohortDB.find();
        res.status(200).json(cohorts);
    }
    catch (error) {
        res.status(500).json({
            message: 'Error retrieving the cohorts from the database.'
        })
    }
});

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
})




module.exports = router;
