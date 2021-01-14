import React, {useContext} from 'react'
import Header from '../Components/Header'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import GlobalStateContext from '../Global/GlobalStateContext'

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

    .normal {
      background-color: #b3966c;
      color: white;
    }

    .fighting {
      background-color: 	#ec777d;
      color: white;
    }
    
    .flying {
      background-color: #838bc9;
      color:white;
    }

    .poison {
      background-color: #b464a1;
      color:white;
    }

    .ground {
      background-color: #e5b465;
      color: white;
    }

    .rock {
      background-color: 	#aaa063;
      color:white;
    }

    .grass {
      background-color: #7ac85b;
      color: white;
    }

    .bug {
      background-color: #96ad39;
      color: white;
    }

    .ghost {
      background-color: 	#836e99;
      color:white;
    }

    .steel {
      background-color: #8cb4be;
      color:white;
    }

    .fire {
      background-color: #fd7754;
      color: white;
    }

    .water {
      background-color: #4fc8db;
      color: white;
    }

    .electric {
      background-color:	#fec30f;
      color:white;
    }

    .psychic {
      background-color: #f36d90;
      color: white;
    }

    .fairy {
      background-color: #ff76af;
      color: white;
    }
    .ice {
      background-color: #6edcd1;
      color: white;
    }
    .dragon {
      background-color: #5b63ab;
      color: white;
    }
    .dark {
      background-color: #5a504f;
      color: white;
    }

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
    const { list, setList, pokedex, setPokedex} = useContext(GlobalStateContext)


    const listData = list.filter(e => {
      return e.data.name === params.pokemonId
    })

    let pokedexData = []
    if ( pokedex !== []) {
      pokedexData = pokedex.filter(e => {
        return e.data.name === params.pokemonId
      })
  }
  
    let pokemon = {}
    
    if(!listData[0] && !pokedexData[0]) {
      return <p>Loading...</p>
    } else if (!listData[0]) {
      pokemon = pokedexData[0].data
    } else if (!pokedexData[0]) {
      pokemon = listData[0].data
    
    }


    return (
        <div>
            <Header 
            path={'goBack'} 
            routeButton={'Voltar'} 
            type={'info'}
            pokemon={!listData[0] ? pokedexData[0] : listData[0]}
            id={pokemon.id}
            name={params.pokemonId}
            buttonText={!listData[0]? "Remover da Pokedex" : "Adicionar à Pokedex"}
            ></Header>
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
                            return <Type key={index} className={e.type.name}>{e.type.name}</Type>
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
