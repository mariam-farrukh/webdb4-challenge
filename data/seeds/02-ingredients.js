exports.seed = function(knex) {
  return knex('ingredients').insert([
      {id: 1, ingredient_name: 'ingredient 1'},
      {id: 2, ingredient_name: 'ingredient 2'},
      {id: 3, ingredient_name: 'ingredient 3'}
    ]);
};