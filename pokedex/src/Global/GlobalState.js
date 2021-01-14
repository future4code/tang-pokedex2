import React from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import axios from "axios";
import useRequestData from '../CustomHooks/useRequestData'
import {useState, useEffect} from 'react'

export default function GlobalState(props) {

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
        <GlobalStateContext.Provider value={{ list, setList, pokedex, setPokedex}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
