import React from "react";
import "font-awesome/css/font-awesome.css";

function Main() {
  return (
    <main>
      <section className="home">
        <h2>Hi ! My name is</h2>
        <h1 className="home__name">
          Mohammed <span className="home__name--last">Raihan</span>
        </h1>
        <h2>Front end React and backedn Laravel development</h2>
        <div className="social-icons">
          <a href="">
            <i className="fa fa-twitter fa-2x"></i>
          </a>
          <a href="">
            <i className="fa fa-facebook fa-2x"></i>
          </a>
          <a href="">
            <i className="fa fa-instagram fa-2x"></i>
          </a>
          <a href="">
            <i className="fa fa-github fa-2x"></i>
          </a>
        
        </div>

        <footer>&copy; Copyright 2021 </footer>
      </section>
    </main>
  );
}

export default Main;
