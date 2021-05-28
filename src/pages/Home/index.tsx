import { useState, useEffect } from 'react'
import api from "../../api"

import Search from '../../components/Search'
import './home.css'

type Movie = {
    title: string
    poster_path: string
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
        <h2 className="h2">Ultimos lançamentos</h2>
      

      <ul className="ul">

      {movies?.map(movie => (
        <section className="container">
          <li className="li">
            <img className="img" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
           
           <div>
              <h2 className="title">{movie.title}</h2>
           </div>
          </li>
        </section> 
      ))}

     </ul>
    </section>
    </>
  )
}