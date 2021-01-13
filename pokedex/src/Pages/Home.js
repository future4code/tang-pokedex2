import React, {useContext, useEffect} from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'
import ContextPokemonList from '../Context/ContextPokemonList'
import styled from 'styled-components'

const Content = styled.div `
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
`

export default function Home() {

    
const {list, setList} = useContext(ContextPokemonList)

const sortedArray = list.sort((a, b) => { return a.data.id - b.data.id})
console.log(list)


    return (
        <div>
            <Header 
                routeButton={'Ir para Pokedex'}
                path={'/pokedex'}
                name={'Lista de Pokemons'}
            />
            <Content>
                {sortedArray[0] ? sortedArray.map((e, index) => {
                    return <Card 
                                id={e.data.id}
                                key={e.data.id}
                                name={e.data.name}
                                img={e.data.sprites.front_default}
                                pokemon={e}
                                buttonText={"Adicionar à Pokedex"}
                            />
                }) : <div>Loading...</div>}
            </Content>
        </div>
    )
}
