const { insert } = require("../database/connection");
const connection = require("../database/connection");
//const bcrypt = require("bcryptjs");

module.exports = {
  async listar(request, response) {
    const user = await connection("user").select("*");

    return response.json(user);
  },

  async create(request, response) {
    const {
      SAB_CODIGO,
      SAB_LOGIN,
      SAB_SENHA,
      SAB_NOME,
      SAB_TIPO,
      SAB_EMAIL,
      SAB_ACESSOEXTERNO,
      ATIVO,
    } = request.body;

    const userExist = await connection("user")
      .select("SAB_EMAIL")
      .where("SAB_EMAIL", SAB_EMAIL);
    if (!!userExist.length) {
      return response.json({ error: "usuário já existe na base" });
    }

    //const senha = crypt.randomBytes(4).toString("HEX");

    await connection("user").insert({
      SAB_CODIGO,
      SAB_LOGIN,
      SAB_SENHA,
      SAB_NOME,
      SAB_TIPO,
      SAB_EMAIL,
      SAB_ACESSOEXTERNO,
      ATIVO,
    });

    return response.json();
  },
};
