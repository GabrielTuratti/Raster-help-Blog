import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PostMasonry, MasonryPost } from "../../components/common";
//import trending from '../../assets/mocks/trending';
import featured from "../../assets/mocks/featured";

import api from "../../services/api";

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
const lastPost = featured.pop();

export default function Home() {
  const [releases, setRelease] = useState([]);

  const acesso = localStorage.getItem("SAB_TIPO");

  useEffect(() => {
    api
      .get("posts", {
        headers: {
          Authorization: acesso,
        },
      })
      .then((response) => {
        setRelease(response.data);
      });
  }, [acesso]);

  return (
    <main className="home">
      <nav className="site-navigation">
        <Nav />
      </nav>
      <section className="container">
        <div className="row">
          <h1>BANNERS PRINCIPAIS</h1>
          <section className="featured-posts-container">
            <PostMasonry posts={featured} columns={0} tagsOnTop={true} />
            <MasonryPost post={lastPost} tagsOnTop={true} />
          </section>
        </div>
      </section>
      <div className="profile-container">
        <h1>ATT PRINCIPAIS</h1>

        {releases.map((release) => (
          <ul>
            <li>
              <strong>{release.titulo}</strong>
              <a href={release.link}>{release.link}</a>
              <p>{release.data}</p>
            </li>
          </ul>
        ))}
      </div>
    </main>
  );
}
