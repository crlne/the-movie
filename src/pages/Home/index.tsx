import { useState, useEffect } from 'react'
import api from "../../api"

import Search from '../../components/Search'
import './home.css'

type Movie = {
    title: string
    poster_path: string
    release_date: string
    vote_average: string
    overview: string
    id: string
}

export function Home() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    api.get('movie/popular').then(response => setMovies(response.data.results))
  }, [])

  function handleSetMovies(movies: Movie[]) {
    setMovies(movies)
  }

  return (
    <>
      <Search handleSetMovies={handleSetMovies} />
      
      <section>
        <h1>Ultimos lançamentos</h1>
      <ul className="ul">

      {movies?.map(movie => (
        <section className="container">
          <li>
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>

           <div className="card-content">
              <h2 className="title">{movie.title}</h2>
              <strong>overview:</strong><p>{movie.overview}</p>
              <span>Rating: {movie.vote_average}</span>
              <span>Release Date: {movie.release_date}</span>
           </div>
          </li>
        </section> 
      ))}
     </ul>
    </section>
    </>
  )
}