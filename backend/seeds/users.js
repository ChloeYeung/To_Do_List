/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, username: 'a', password: '$2b$10$BgAvcr9wamMlAHsC5G2Jn.kqTzdFDCHjve6DDpG5pwrtr3kDBwkk6'},
    //password: a
  ]);
};
