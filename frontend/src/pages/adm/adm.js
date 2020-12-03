import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

export default function Adm() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [acesso, setAcesso] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState("");

  const history = useHistory();

  const POST_ID = localStorage.getItem("POST_ID");

  async function newPost(e) {
    e.preventDefault();

    console.log(titulo, descricao, acesso, link, data);
    const info = {
      titulo,
      descricao,
      acesso,
      link,
      data,
    };
    try {
      await api.post("posts", info, {
        headers: {
          Authorization: POST_ID,
        },
      });

      history.push("/adm");
    } catch (err) {
      alert("Erro ao cadastrar, tente novamente");
    }
  }

  const Nav = () => {
    return (
      <nav className="site-navigation">
        <span>Help Blog</span>
        <ul>
          <li>
            <Link to="/"> home </Link>
            <Link to="/adm"> Administração</Link>
            <Link to="release"> Release</Link>
          </li>
        </ul>
      </nav>
    );
  };
  return (
    <div className="New-incident-container">
      <nav className="site-navigation">
        <Nav />
      </nav>
      <div className="content">
        <section>
          <h1>Cadastrar NOVO</h1>
          <p>Descreva o cadastro detalhadamente.</p>
        </section>

        <form onSubmit={newPost}>
          <input
            placeholder="Titulo do caso "
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nivel de acesso"
            value={acesso}
            onChange={(e) => setAcesso(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <input
            type="date"
            placeholder="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />

          <button className="button" type=" submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
