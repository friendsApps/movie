import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { IoIosArrowDropleft } from "react-icons/io";

import "./index.css";

function Results(props) {
  const [results, setResults] = useState([]);
  const history = useHistory();

  function goBack() {
    return history.goBack();
  }
  useEffect(() => {
    const movie = props.history.location.state;
    setResults([movie]);
  }, []);

  return (
    <div className="container">
      <header></header>

      <section className="container_fluid">
        <header className="headerResults">
          <div>
            <IoIosArrowDropleft color="#000" size={32} onClick={goBack} />
          </div>
          <div>
            <h2>Lista de Filmes</h2>
          </div>
        </header>

        <section>
          {results.map((item) => (
            <div className="box" key={item.imdbID}>
              <div className="dateMovie">
                <div className="boxTitle">
                  <img src={item.Poster} alt="" />
                  <strong>{item.Title}</strong>
                </div>

                <div>
                  <strong>{item.Year}</strong>
                </div>
              </div>

              <div className="description">
                <p>{item.Plot}</p>
              </div>

              <div className="listBox">
                {item.Genre.split(",").map((item) => (
                  <p className="minBox" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}

export default Results;
