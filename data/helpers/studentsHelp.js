const db = require('../dbconfig.js');

module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
};

function find() {
    return db('students');
};

function findById(id) {
    return db
        .select(["students.id", "students.name", "cohorts.name as cohorts"])
        .from("students")
        .join("cohorts", "students.cohorts_id", "cohorts.id")
        .where("students.id", id);
};

function insert(student) {
    return db('students')
        .insert(student);
};

function update(id, change) {
    return db('students')
        .where({ id })
        .update(change)
};

function remove(id) {
    return db('students')
        .where({ id })
        .del()
};