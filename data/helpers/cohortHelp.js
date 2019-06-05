const db = require('../dbconfig.js');

module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
    getStudentsByCohortID
};

function find() {
    return db('cohorts');
};

function findById(id) {
    return db('cohorts')
        .where({ id })
        .first();
};

function insert(cohort) {
    return db('cohorts')
        .insert(cohort)
        .then(ids => {
            return getById(ids[0]);
        })
};

function update(id, change) {
    return db('cohorts')
        .where({ id })
        .update(change)
};

function remove(id) {
    return db('cohorts')
        .where({ id })
        .del()
};

function getStudentsByCohortID(id) {
    return db('students').where('cohort_id', id);
};