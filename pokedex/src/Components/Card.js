import React, {useContext} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import ContextPokedex from '../Context/ContextPokedex'
import ContextPokemonList from '../Context/ContextPokemonList'


    const MainCard = styled.div`
        background-color: lightgrey;
        height: 35vh;
        width: 250px;
        display: flex;
        flex-direction: column;
        margin: 16px 16px;
    `

    const ButtonDiv = styled.div`
        display: flex;
        margin: 8px 12px;
    `
    const ImageDiv = styled.div`
        height: 80%;
        width: 100%;
    `
    const Button = styled.button`
        margin:0 6px;
    `
export default function Card(props) {

    const {pokedex, setPokedex} = useContext(ContextPokedex)
    const {list, setList} = useContext(ContextPokemonList)

    const history = useHistory()
    const onClickInfo = () => {
        history.push(`/poke-info/${props.name}`)
    }

    

    const addToPokedex = () => {
        const position = pokedex.findIndex((e) => e.data.id === props.id)
        console.log(props.id)
        console.log(position)
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
       
    }

    return (
        <MainCard>
            <h3>{props.name}</h3>
            <ImageDiv>
                <img src={props.img} alt={props.name}/>
            </ImageDiv>
            <ButtonDiv>
                <Button onClick={addToPokedex}>{props.buttonText}</Button>
                <Button onClick={onClickInfo}>Ver informações</Button>
            </ButtonDiv>
        </MainCard>
    )
}
