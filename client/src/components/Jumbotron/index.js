import React from "react";
import "./style.css";

const divStyle = {
  backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029_1280.jpg)',
  fontFamily: '"Poppins", sans-serif;'
};
function Jumbotron() {
  return (
    <div className="jumbotron text-center text-white" style={divStyle}>
      <h1>Google Books Search</h1>
      <a className="text-light" target="_blank" rel="noopener noreferrer" href="https://books.google.com/">
        Powered by Google Books
      </a>
    </div>
  );
}

export default Jumbotron;
