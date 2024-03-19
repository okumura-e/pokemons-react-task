import { useState, useEffect, useRef } from 'react'
import './App.css'
import Card from './components/Card'
import api from './services/api'

function App() {
  //variavel que deve ser relacionada com o input
  const [pesquisa, setPesquisa] = useState('')
  //variavel que vai receber o(s) pokemon(s) da API
  const [pokemons, setPokemons] = useState([1])

  useEffect(() => {
    //faça a função para buscar os 8 pokemons iniciais aqui

    // para limitar a 8 pokemons, faça a requisição assim: .get("/pokemon?limit=8")

    //a pesquisa deve inserir os pokemons dentro da variavel 'pokemons'
  })

  function handleSubmit() {
    //aqui faça a função para buscar o pokemon que foi digitado no input
    //o pokemon encontrado deve ser novo valor da variavel 'pokemons'
  }

  return (
    <>
      <section className="container">
        <img id='APIlogo' src="/pokeapi_logo.png" alt="PokeAPI" />
        <form>
          <input
            type="text"
            placeholder="Pesquisar"
          />
          <button type="submit" onClick={handleSubmit}>
            Pesquisar
          </button>
        </form>

        <section className="grid">
          {pokemons?.map((pokemon, index) => (
            <Card
              key={index}
              name={"nome do pokemon"}
              image={pokemon?.sprites?.other?.dream_world?.front_default}
            />
          ))}
        </section>
      </section>
    </>
  )
}

export default App
