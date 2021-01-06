import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

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

    const history = useHistory()
    const onClickInfo = () => {
        history.push('/poke-info')
    }

    return (
        <MainCard>
            <h3>{props.name}</h3>
            <ImageDiv>
                <img />
            </ImageDiv>
            <ButtonDiv>
                <Button>Adicionar a Pokedex</Button>
                <Button onClick={onClickInfo}>Ver informações</Button>
            </ButtonDiv>
        </MainCard>
    )
}
