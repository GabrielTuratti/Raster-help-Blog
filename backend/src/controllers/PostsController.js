const connection = require("../database/connection");

module.exports = {
  async listar(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("posts").count();

    const posts = await connection("posts")
      .limit(100)
      .offset((page - 1) * 5)
      .select("*");
    response.header("Total_Contado", count["count(*)"]);

    return response.json(posts);
  },

  async create(request, response) {
    const { titulo, descricao, acesso, link, data } = request.body;

    const postExist = await connection("posts")
      .select("link")
      .where("link", link);
    if (!!postExist.length) {
      return response.json({ error: "posts já existe" });
    }

    await connection("posts").insert({
      titulo,
      descricao,
      acesso,
      link,
      data,
    });

    return response.json();
  },
};
