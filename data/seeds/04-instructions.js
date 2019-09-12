exports.seed = function(knex) {
  return knex("instructions").insert([
    {
      step_number: 1,
      instruction: "stir in bricks",
      recipe_id: 1
    }
  ]);
};
