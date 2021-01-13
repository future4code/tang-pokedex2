import Router from './Pages/Router'
import './App.css';
import ContextPokemonList from './Context/ContextPokemonList'
import ContextPokedex from './Context/ContextPokedex'
import useRequestData from './CustomHooks/useRequestData'
import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [list, setList] = useState([])
  const [pokedex, setPokedex] = useState([])
  const pokemonData = useRequestData(' https://pokeapi.co/api/v2/pokemon',{})
  

  useEffect(() => {
      
      pokemonData.data && pokemonData.data.results.map((e, index) => {
    
        
            axios.get(`https://pokeapi.co/api/v2/pokemon/${e.name}`).then((response) => {
              setList( arr => [...arr, response])           
            }).catch(error => { console.log(error)})
      })
  }, [pokemonData.data])


  return (
    <div className="App">
      <ContextPokedex.Provider value={{pokedex,setPokedex}}>
      <ContextPokemonList.Provider value={{list, setList}}>
        <Router/>
      </ContextPokemonList.Provider>
      </ContextPokedex.Provider>
    </div>
  );
}

export default App;
