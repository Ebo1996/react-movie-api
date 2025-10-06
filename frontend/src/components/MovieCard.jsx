import React from 'react'

function MovieCard({ movie }) {

  function onFavoriteClick() { 
    alert("clicked")
  }



  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={movie.url} alt={movie.title} />
        <div className='movie-overlay'></div>
        <button className='favourite-btn' onClick={onFavoriteClick}>♥</button>
      </div>
      <div className='movie-info'> 
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>

      </div>
    </div>
  )
}

export default MovieCard;
