import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
//import AuthController from "../../../../backend/src/controllers/AuthController";
import api from "../../services/api";

export default function Login() {
  const [SAB_EMAIL, setEmail] = useState("");
  const [SAB_SENHA, setSenha] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("user", { SAB_EMAIL, SAB_SENHA });

      localStorage.setItem("SAB_EMAIL", SAB_EMAIL);
      localStorage.setItem("SAB_EMAIL", SAB_SENHA);

      history.push("/user");
    } catch (err) {
      alert("Falha no login, tente novamente.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1> Faça seu login</h1>

          <input
            placeholder="Email"
            value={SAB_EMAIL}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            value={SAB_SENHA}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="button" type="submit">
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}
