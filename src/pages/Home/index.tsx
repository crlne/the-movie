import { useState, useEffect } from 'react'
import api from "../../api"
import  Modal  from '../../components/Modal'

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

  const [showMovie, setShowMovie] = useState(false);

  const openMovie = () => {
    setShowMovie(prev => !prev)
  }

  return (
    <>
      <Search handleSetMovies={handleSetMovies} />
      
      <section>
        <h2 className="h2">Ultimos lançamentos</h2>
      

      <ul className="ul">

      {movies?.map(movie => (
        <section className="container">
           <Modal showMovie={showMovie} setShowMovie={setShowMovie} />
          <li className="li">
            <img className="img" onClick={openMovie} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
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