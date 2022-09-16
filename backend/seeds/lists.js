/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('lists').del()
  await knex('lists').insert([
    {id: 1, user_id: 1, list: "Do React Exercise"},
    {id: 2, user_id: 1, list: "Do JavaScript Exercise"},
  ]);
};
