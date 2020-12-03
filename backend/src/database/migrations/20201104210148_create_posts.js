exports.up = function (knex) {
  return knex.schema.createTable("posts", function (table) {
    table.increments("POST_ID").notNullable();
    table.string("titulo").notNullable();
    table.string("descricao").notNullable();
    table.string("acesso").notNullable();
    table.string("link");
    table.string("data").notNullable();

    //inserir pdf e img N FAÇO A MINIMA IDEIA DE COMO FAZER ( SERVIDOR DE ARQUIVOS MAYBE ?)

    table.foreign("acesso").references("SAB_TIPO").inTable("user");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("posts");
};
