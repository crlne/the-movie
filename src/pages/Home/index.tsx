import { useState, useEffect } from 'react'
import api from "../../api"

import { format, parseISO } from 'date-fns'

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

  function handleFormatDate(date: string) {
    try {
      const formattedDate = format(parseISO(date), 'dd/MM/yyyy')
      return formattedDate
    } catch(error) {
      return "Sem data disponível"
    }
  }

  return (
    <>
      <Search handleSetMovies={handleSetMovies} />
      
      <section>
        <h1>Últimos lançamentos</h1>
      <ul>
      {movies?.map(movie => (
        <section className="container">
          <li key={movie.id}>
            <div className="card-img">
             <img alt={movie.title} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
            </div>
            

           <div className="card-content">
              <h2 className="title">{movie.title}</h2>
              <strong>overview:</strong><p>{movie.overview}</p>
              <span>Rating: {movie.vote_average}</span>
              <span>Release Date: {handleFormatDate(movie.release_date)}</span>
           </div>
          </li>
        </section> 
      ))}
     </ul>
    </section>
    </>
  )
}

