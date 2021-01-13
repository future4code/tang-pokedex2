import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import ContextPokedex from '../Context/ContextPokedex'
import ContextPokemonList from '../Context/ContextPokemonList'


const HeaderMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: red;
    padding: 0 1em 0;
`

export default function Header(props) {


    const history = useHistory();
    const onClickButton = () => { 
        if (props.path === "goBack") {
            history.goBack()
        } else { history.push(props.path) }
    }

    const {pokedex, setPokedex} = useContext(ContextPokedex)
    const {list, setList} = useContext(ContextPokemonList)    
    if (!list[0] && !pokedex[0]) {
        return <div> Loading</div>
    }
    
    
    const addToPokedex = () => {
        const position = pokedex.findIndex((e) => e.data.id === props.id)
        if(position === -1) {
            setPokedex([...pokedex, props.pokemon])
            const newArray = list.filter(e => {
                return e.data.id !== props.id
            })
            setList(newArray)
        } else {
            setList([...list, props.pokemon])
            const newArray = pokedex.filter(e => {
                return e.data.id !== props.id
            })
            setPokedex(newArray)
        }
        console.log(pokedex)
    }

    return (
        <HeaderMain>
            <button onClick={onClickButton}>{props.routeButton}</button>
            <h1>{props.name}</h1>
            {props.type === 'info'? <button onClick={addToPokedex}>{props.buttonText}</button> : <div></div>}
        </HeaderMain>
    )
}
