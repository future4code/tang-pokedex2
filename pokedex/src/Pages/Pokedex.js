import React, {useContext} from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'
import GlobalStateContext from '../Global/GlobalStateContext'
import styled from 'styled-components'
import Loading from "../Components/Loading"

const Content = styled.div `
     display: flex;
    justify-content: space-around;
    flex-flow: wrap;

`

export default function Pokedex() {
    const {list, setList, pokedex, setPokedex} = useContext(GlobalStateContext)

    if (pokedex === undefined) {
        return <Loading/>
    }
    return (
        <div>
            <Header path={'/'} routeButton={'Voltar para lista'} name={'Pokédex'}/>
            <Content>
                {pokedex.map(e => {
                    return <Card
                                id={e.data.id}
                                key={e.data.id}
                                name={e.data.name}
                                img={e.data.sprites.front_default}
                                pokemon={e}
                                buttonText={"Remover da Pokédex"}
                            />
                })}
            </Content>
        </div>
    )
}
