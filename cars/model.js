const DB = require("../data/db-config.js");

const getAll = () => {
	return DB("cars");
};

const insert = ({ vin, make, model, mileage }) => {
	return DB("cars").insert({ vin, make, model, mileage });
};

const update = ({ id, vin, make, model, mileage }) => {
	return DB("cars")
		.where({ id })
		.update({ vin, make, model, mileage });
};

const deleteEntry = ({ id }) => {
	return DB("cars")
		.where({ id })
		.delete();
};

module.exports = {
	getAll,
	insert,
	update,
	deleteEntry
};