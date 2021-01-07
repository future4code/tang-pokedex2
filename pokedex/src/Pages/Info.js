import React, {useContext} from 'react'
import Header from '../Components/Header'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import ContextPokemonList from '../Context/ContextPokemonList'

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
    height: 80vh;
`

const ImageSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 75%;
    width: 300px;
    margin: 0 16px;
    justify-content: space-between;
` 
const ImageDiv = styled.div`
    background-color: lightgray;
    height: 25vh;
` 
const Stats = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    height: 75%;
    width: 300px;
    margin: 0 16px;
    text-align: left;

    h2 {
        text-align: center;
    }

    p {
        padding: 0 0 0 16px;
    }

` 
const TypeMoveSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 75%;
    width: 300px;
    margin: 0 16px;
` 
const TypesDiv = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: lightgray;
` 
const Type = styled.div`
` 

const MoveDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: lightgray;
`

export default function Info() {
    const params = useParams();
    const list = useContext(ContextPokemonList)
    const pokemon = list[params.pokemonId] && list[params.pokemonId].data
    console.log(pokemon)
    return (
        <div>
            <Header path={'/'} routeButton={'Voltar'} h1={pokemon.name} type={'info'}></Header>
            <Content>
                <ImageSection>
                    <ImageDiv><img src={pokemon.sprites.front_default}/></ImageDiv>
                    <ImageDiv><img src={pokemon.sprites.back_default}/></ImageDiv>
                </ImageSection>
                <Stats>
                    <h2>Stats</h2>
                    { pokemon.stats.map(e => {
                        return <p key={e.stat.name}>{e.stat.name}: {e.base_stat}</p>
                    })}
                </Stats>
                <TypeMoveSection>
                    <TypesDiv>
                        {pokemon.types.map((e,index) => {
                            return <Type key={index}>{e.type.name}</Type>
                        })}
                    </TypesDiv>
                    <MoveDiv>
                        <h2>Moves</h2>
                        {pokemon.moves.map((e,index) => {
                            return index < 3 ? <p key={index}>{e.move.name}</p> : null  
                        })}
                    </MoveDiv> 
                </TypeMoveSection>    
            </Content>
        </div>
    )
}
