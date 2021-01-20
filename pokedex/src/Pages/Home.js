import React, {useContext, useEffect, useState} from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'
import GlobalStateContext from '../Global/GlobalStateContext'
import styled from 'styled-components'
import Pokedex from './Pokedex'
import arrowLeft from '../img/arrowLeft.svg'
import Loading from "../Components/Loading"
import CompareComponent from '../Components/CompareComponent'


const MainDiv = styled.div `
    margin-bottom: 200px;
`

const Content = styled.div `
    display: flex;
    justify-content: space-around;
    flex-flow: wrap;
`

const Pagination = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`
const Icon = styled.img `
    margin:1em 2em;
    width: 2em;
    height: 2em;
    cursor: pointer;
`
export default function Home() {

        
    const {list, setList, pokedex, setPokedex,offset, setOffset, pokemonsTotal, setPokemonsTotal} = useContext(GlobalStateContext)

    const sortedArray = list.sort((a, b) => { return a.data.id - b.data.id})

    const [isMount, setIsMount] = useState(true);
    useEffect(()=>{
            if(isMount){
                setIsMount(false);
                return;
            }
            
            if (!renderArray[0]) {nextPage()}


    }, [pokedex])

 

    const nextPage = () => {
        if ( offset <= 1000) {
            setOffset(offset+20)
        }

            if (pokemonsTotal <= offset+19 ) {
                setPokemonsTotal(pokemonsTotal+20)
            }
    }
    const lastPage = () => {
        if(offset > 0) {
            setOffset(offset-20)

        }

    }



const renderArray = sortedArray.filter((e) => {
    if(e.data.id >offset && e.data.id <=offset+20) {
     return true
    } 
    return false 
}).map(e => {
    return <Card 
                 id={e.data.id}
                 key={e.data.id}
                 name={e.data.name}
                 img={e.data.sprites.front_default}
                 pokemon={e}
                 buttonText={"Adicionar à Pokédex"}
             /> 
})


    return (
        <MainDiv>
            <Header 
                routeButton={'Abrir Pokédex'}
                path={'/pokedex'}
                name={'Lista de Pokemons'}
            />
            <Pagination>
                {offset > 0 ? <Icon src={arrowLeft} onClick={lastPage}/> : null}
                <p>Página {offset/20+1}</p>
                <Icon style={{transform: "rotate(180deg)"}} src={arrowLeft} onClick={nextPage}/>
            </Pagination>
            
            {sortedArray[pokemonsTotal-pokedex.length] ? <Content>
                
                {renderArray[0] ? renderArray : <div><br/><br/>Você já adicionou todos os Pokemons desta página à sua Pokédex</div> }
            </Content> : <Loading/>}
            <CompareComponent></CompareComponent>
        </MainDiv>
    )
}
