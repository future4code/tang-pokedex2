import React, {useContext} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import GlobalStateContext from '../Global/GlobalStateContext'
import Loading from './Loading'

const MainDiv = styled.div `
    height: 13%;
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: inset 2px 2px black, 2px 2px black;

    div {
    display: flex;
    background-color: #9D0101;
    color: whitesmoke;
    padding: 0 1em 0;
    align-items: center;
    justify-content: space-between;
}
    
    .mobile{
        display: none;
    }
    @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) { 
    height: auto;

    .desktop{
        display:none;
    }
    .mobile {
    display: flex;
    flex-direction:column;

        div,img,p {
            margin: 0 8px;
            padding: 0;
        }
        
        img {
            height: 5em;
        }

        .pokemonDiv{
            display: flex;
            flex-direction: column;
        }
    }
  }


`

const Button = styled.button`
        margin:0 6px;
        font-family: 'Pokemon8bit';
        font-size: 0.6em;
        border: none;
        box-shadow: inset 2px 2px black, 2px 2px black;
        cursor: pointer;

        :hover {
            background-color: white;
        }

        
    `

export default function CompareComponent() {

    const {compare, setCompare} = useContext(GlobalStateContext)
    const history = useHistory()

const goToComparePage = () => {
    if(compare.length === 2) {
        history.push('/compare')
    }
}

const removePokemons = () => {
    setCompare([])
}

if (!compare[0]) {
    return <div/>
}
    return (
        <MainDiv>
            <div className={'desktop'}>
            <Button onClick={goToComparePage}>Comparar</Button>
            <p>{compare[0].data.name}</p>
            <img src={compare[0].data.sprites.front_default}></img>
            <p>VS</p>
            <img src={compare[1] ? compare[1].data.sprites.front_default : null }></img>
            <p>{compare[1] ? compare[1].data.name : "Selecione outro pokemon" }</p>
            <Button onClick={removePokemons}> Limpar</Button>
            </div>


            <div className={'mobile'}>
                <div>
                    <Button onClick={goToComparePage}>Comparar</Button>
                    <Button  onClick={removePokemons}> Limpar</Button>
                </div>
                <div >
                    <p>{compare[0].data.name}</p>
                    <img src={compare[0].data.sprites.front_default}></img>
                </div>
                <div >
                    <p >{compare[1] ? compare[1].data.name : "Selecione outro pokemon" }</p>
                    <img src={compare[1] ? compare[1].data.sprites.front_default : null }></img>
                </div>
            </div>
        </MainDiv>
    )
}
