
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
					id: 1,
					vin: "14445870905274892",
					make: "toyota",
					model: "beat",
					mileage: 100
				}

      ]);
    });
};
