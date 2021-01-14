import React from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'


export default function Home() {

const pokemonList = ['teste']
    return (
        <div>
            <Header 
                routeButton={'Ir para Pokedex'}
                path={'/pokedex'}
                h1={'Lista de Pokemons'}
            />
            {pokemonList.map(e => {
                return <Card 
                            key={e}
                            name={e}
                        />
            })}
        </div>
    )
}
