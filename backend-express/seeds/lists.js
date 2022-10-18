/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('lists').del()
  await knex('lists').insert([
    {user_id: 1, list: "Meeting with Company Employee"},
    {user_id: 1, list: "Start the new business plan for the Startups"},
    {user_id: 1, list: "Spend sometimes with friends"},
    {user_id: 1, list: "going on a break"},
    {user_id: 1, list: "Buy a personal assest"},
  ]);
};
