exports.up = function(knex) {
    return knex.schema.createTable('user', function (table) {
        table.increments('SAB_CODIGO').primary();
        table.string('SAB_LOGIN').notNullable();
        table.string('SAB_SENHA').notNullable();
        table.string('SAB_NOME').notNullable();
        table.string('SAB_TIPO').notNullable();
        table.string('SAB_EMAIL').notNullable();
        table.string('SAB_ACESSOEXTERNO').notNullable();
        table.string('ATIVO').notNullable();
     });
 };

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
 