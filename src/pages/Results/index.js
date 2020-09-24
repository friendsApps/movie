import React, { useState } from "react";

import { useHistory } from 'react-router-dom';

import { IoIosArrowDropleft} from 'react-icons/io'

import "./index.css";

function Results() {
  const history = useHistory();
  const [results, setResults] = useState([]);

  function goBack() {
    return history.goBack();
  }
  return (
    <div className="container">
      <header></header>

      <section className="container_fluid">
        <header className="headerResults">
          <div>
            <IoIosArrowDropleft color="#000" size={32} onClick={goBack}/>
          </div>
<div>
  <h2>Lista de Filmes</h2>
</div>
        </header>

        <section>
          
          <div className="box">
            <div className="dateMovie">
              <div className="boxTitle">
                <img src="https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_SX300.jpg" alt="" />
                <strong>Cars 2</strong>
              </div>

              <div>
                <small>2011</small>
              </div>
            </div>

            <div className="description">
              <p>
                Star race car Lightning McQueen and his pal Mater head overseas
                to compete in the World Grand Prix race. But the road to the
                championship becomes rocky as Mater gets caught up in an
                intriguing adventure of his own: international espionage.
              </p>
            </div>

            <div className="listBox">
              <div className="minBox">Animation</div>
              <div className="minBox">Adventure</div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Results;
