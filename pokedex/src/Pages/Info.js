import React from 'react'
import Header from '../Components/Header'
import styled from 'styled-components'

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
    return (
        <div>
            <Header path={'/'} routeButton={'Voltar'} h1={'Pokemon.name'} type={'info'}></Header>
            <Content>
                <ImageSection>
                    <ImageDiv><img src={''}/>image</ImageDiv>
                    <ImageDiv><img src={''}/>image</ImageDiv>
                </ImageSection>
                <Stats>
                    <h2>Stats</h2>
                    <p>HP:</p>
                    <p>Attack:</p>
                    <p>Defense:</p>
                    <p>Special-Attack:</p>
                    <p>Special-Defense:</p>
                    <p>Speed</p>
                </Stats>
                <TypeMoveSection>
                    <TypesDiv>
                        <Type>type</Type>
                        <Type>type</Type>
                    </TypesDiv>
                    <MoveDiv>
                        <h2>Moves</h2>
                        <p>Move name 1</p>
                        <p>Move name 2</p>
                        <p>Move name 3</p>
                    </MoveDiv> 
                </TypeMoveSection>    
            </Content>
        </div>
    )
}
