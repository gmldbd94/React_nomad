import React from 'react';
import './Movie.css';


class Movie extends React.Component{
  render(){
    console.log(this.props);
    return(

      <div>
        <MoviePoster poster={this.props.poster}> </MoviePoster>
        <h1>제목 {this.props.title}</h1>
      </div>

    );
  }
}
// 여기에 내용을 추가하면 MoviePoster에 들어간다
class MoviePoster extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <img src={this.props.poster}></img>
      </div>
    );
  }
}
export default Movie;
