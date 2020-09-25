import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Main() {
  const history = useHistory();
  const api = "https://www.omdbapi.com/?i=tt3896198&apikey=67345d3d";
  const [movie, setMovie] = useState("");

  async function onChangeMovies(event) {
    event.preventDefault();
    let newapi = `${api}&t=${movie}`;

    const itens = await axios.get(newapi);
    console.log(itens);

    if (itens.data.Response === "False") {
      Swal.fire({
        title: "Ops ....",
        text: "Filme não encontrad",
        icon: "error",
        confirmButtonText: "Fechar",
      });
    } else {
      return history.push("/list_movies", itens.data);
    }
  }
  return (
    <div className="container">
      <header></header>

      <section className="conteudo">
        <h3>Digite o nome de um filme</h3>
        <form onSubmit={onChangeMovies}>
          <div className="group-input">
            <input
              type="text"
              name="movie"
              placeholder="Nome do filme: "
              className="input-control"
              value={movie}
              onChange={(e) => setMovie(e.target.value)}
            />

            <button type="submit" className="btn btn-primary">
              Pesquisar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Main;
