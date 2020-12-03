const connection = require("../database/connection");
const jwt = require("jsonwebtoken");

module.exports = {
  async create(request, response) {
    const { SAB_CODIGO } = request.body;

    const user = await connection("user")
      .where("SAB_CODIGO", SAB_CODIGO)
      .select("SAB_LOGIN")
      .first();

    if (!user) {
      return response
        .status(400)
        .json({ error: "Nem usuario encontrado com este ID." });
    }

    return response.json(user);
  },
};
