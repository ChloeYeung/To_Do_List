/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('lists').del()
  await knex('lists').insert([
    {id: 1, user_id: 1, list: "Meeting with Company Employee"},
    {id: 2, user_id: 1, list: "Start the new business plan for the Startups"},
    {id: 3, user_id: 1, list: "Spend sometimes with friends"},
    {id: 4, user_id: 1, list: "going on a break"},
    {id: 5, user_id: 1, list: "Buy a personal assest"},
  ]);
};
