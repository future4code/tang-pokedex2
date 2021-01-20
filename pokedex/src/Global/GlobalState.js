import React from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import axios from "axios";
import useRequestData from '../CustomHooks/useRequestData'
import {useState, useEffect} from 'react'

export default function GlobalState(props) {

    const [list, setList] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [offset, setOffset] = useState(0)
    const [compare, setCompare] = useState([])
    const [pokemonsTotal, setPokemonsTotal] = useState(19);
    const pokemonData = useRequestData(` https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}"`,{})
    
  
    useEffect(() => {
        
        pokemonData.data && pokemonData.data.results.map((e, index) => {
      
            const positionOnList = list.findIndex((item) => item.data.name === e.name)
            const positionOnPokedex = pokedex.findIndex((item) => item.data.name === e.name)
            if (positionOnList === -1 && positionOnPokedex === -1) {
              axios.get(`https://pokeapi.co/api/v2/pokemon/${e.name}`).then((response) => {
                setList( arr => [...arr, response])           
              }).catch(error => { console.log(error)})
            }
        })
    }, [pokemonData.data])
  

    
    return (
        <GlobalStateContext.Provider value={{ list, setList, pokedex, setPokedex, offset, setOffset, compare, setCompare, pokemonsTotal, setPokemonsTotal}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
