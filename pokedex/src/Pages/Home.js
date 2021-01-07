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

    
const list = useContext(ContextPokemonList)
console.log(list)


    return (
        <div>
            <Header 
                routeButton={'Ir para Pokedex'}
                path={'/pokedex'}
                h1={'Lista de Pokemons'}
            />
            <Content>
                {list[0] ? list.map((e, index) => {
                    return <Card 
                                index={index}
                                key={e.data.id}
                                name={e.data.name}
                                img={e.data.sprites.front_default}
                            />
                }) : <div>Loading...</div>}
            </Content>
        </div>
    )
}
