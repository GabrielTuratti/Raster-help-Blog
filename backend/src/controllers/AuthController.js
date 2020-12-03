const { response, request } = require("express");
const jwt = require("jsonwebtoken");
const connection = require("../database/connection");

module.exports = {
  async athenticate(req, res) {
    const { email, password } = req.body;

    // verificar se o usuario existe atraves do email

    const user = await connection("user")
      .where("SAB_EMAIL", email)
      .andWhere("SAB_SENHA", password);

    if (!user.length) {
      return res.status(401).json({ success: false });
    }

    const token = jwt.sign(
      {
        id: user.SAB_CODIGO,
        user_type: user.SAB_TIPO,
      },
      "secret",
      { expiresIn: "1h" }
    );

    delete user.SAB_SENHA;

    return res.json({
      user,
      token,
    });
  },
};
