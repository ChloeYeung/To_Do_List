const knexFile = require("./knexfile").development;
const knexInstance = require("knex")(knexFile);
module.exports = knexInstance 