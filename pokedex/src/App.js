import Router from './Pages/Router'
import './App.css';
import ContextPokemonList from './Context/ContextPokemonList'
import useRequestData from './CustomHooks/useRequestData'
import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [list, setList] = useState([])
  const pokemonData = useRequestData(' https://pokeapi.co/api/v2/pokemon',{})
  console.log(pokemonData)

  useEffect(() => {
      
      pokemonData.data && pokemonData.data.results.map((e, index) => {
    
        
            axios.get(`https://pokeapi.co/api/v2/pokemon/${e.name}`).then((response) => {
              setList( arr => [...arr, response])           
            }).catch(error => { alert(error)})
      })
  }, [pokemonData.data])

console.log(list.sort((a, b) => { return a.data.id - b.data.id}))
  return (
    <div className="App">
      <ContextPokemonList.Provider value={list}>
        <Router/>
      </ContextPokemonList.Provider>
    </div>
  );
}

export default App;
