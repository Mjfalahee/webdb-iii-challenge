
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Michael', cohorts_id: 1},
        {name: 'Josh', cohorts_id: 2},
        {name: 'Doug', cohorts_id: 3}
      ]);
    });
};
