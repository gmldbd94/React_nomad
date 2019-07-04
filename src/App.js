import React from 'react';
import './App.css';
import Movie from './Movie';

const moviesTitle = [
  "matrix",
  "Full metal Jacket",
  "Oldboy",
  "Star Wars"
]

const MovieImg = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png"
]
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Movie title={moviesTitle[0]} poster={MovieImg[0]}/>
        <Movie title={moviesTitle[1]} poster={MovieImg[1]}/>
        <Movie title={moviesTitle[2]} poster={MovieImg[2]}/>
        <Movie title={moviesTitle[3]} poster={MovieImg[3]}/>
      </div>
    );
  }
}


export default App;
