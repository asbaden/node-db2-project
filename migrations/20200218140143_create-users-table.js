
exports.up = function(knex) {
  //change we want to make to our schema
  return knex.schema.createTable("cars", table => {
      table.increments();
      table
			.string("vin", 17)
			.unique()
			.notNullable();

		table.text("make").notNullable();
		table.text("model").notNullable();
		table
			.integer("mileage")
			.unsigned()
			.notNullable();
		table.text("transmission_type");
		table.text("title_status");

  });
};

exports.down = function(knex) {
  // undoing that change 
  return knex.schema.dropTableIfExists("cars");
};
