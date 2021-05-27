/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react'
import api from "../../api"

import Search from '../../components/Search'

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

      {movies?.map(movie => (
        <div>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
          <h2>{movie.title}</h2>
        </div>
      ))}
    </>
  )
}