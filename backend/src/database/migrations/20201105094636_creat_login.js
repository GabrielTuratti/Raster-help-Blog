exports.up = function(knex) {
    return knex.schema.createTable('login', function (table) {
        table.increments('id').notNullable();
        table.string('nome').notNullable();
     });
};

exports.down = function(knex) {
    return knex.schema.dropTable('login');
};
 