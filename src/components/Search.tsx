import { useState } from 'react'
import { VscSearch } from "react-icons/vsc"
import './Search.css';

import api from '../api'

type SearchProps = {
    handleSetMovies: (movies: Movie[]) => void
}

type Movie = {
    title: string
    poster_path: string
}

export default function Search({ handleSetMovies }: SearchProps) {
    const [query, setQuery] = useState('')

    function buscarFilmes(event: { preventDefault: () => void; }) {
      event.preventDefault()

      api.get('search/movie', {
        params: {
          query
        }
      }).then(response => {
        handleSetMovies(response.data.results)
  
        console.log(response.data.results)
      })
    }

    return (
        <form className="input" onSubmit={buscarFilmes}>
          
           <input className="inputsearch" type="search" placeholder="Search" onChange={event => setQuery(event.target.value)} /> 
           <button className="button" type="submit"><VscSearch /></button>
        </form> 
    ) 
}
