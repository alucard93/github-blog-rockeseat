import React from 'react'
import { SearchContainer } from './style'

export const Search = () => {
  return (
    <SearchContainer>
      <div>
        <h3>Publicações</h3>
        <p>6 publicações</p>
      </div>
      <nav>
        <input type="text" placeholder="Buscar conteúdo" />
      </nav>
    </SearchContainer>
  )
}
