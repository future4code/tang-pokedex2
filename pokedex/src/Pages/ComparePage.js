import React, {useContext} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import GlobalStateContext from '../Global/GlobalStateContext'
import Loading from '../Components/Loading'
import Header from "../Components/Header"


const Content = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 0 48px;

    @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) { 
      
  }
`

const Section = styled.div `
    display: flex;
    align-items:center;
    justify-content: space-evenly;

    .pokemon {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .totalDiv,.imgDiv {
        text-align: center;
        margin: 8px;
        width: 300px;
        background-color: whitesmoke;
        box-shadow: inset 2px 2px black, 2px 2px black, 10px 10px  5px black;
    }

    @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) { 
    display: block;   
  }
    

`
const Stats = styled.div`
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    height: 75%;
    width: 300px;
    margin: 0 16px 16px;
    text-align: left;
    box-shadow: inset 2px 2px black, 2px 2px black, 10px 10px  5px black;

    h2 {
        text-align: center;
    }

    p {
        padding: 0 0 0 16px;
    }

`
const ResultDiv = styled.div ` 
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: whitesmoke;
    box-shadow: inset 2px 2px black, 2px 2px black, 10px 10px  5px black;
    margin: 18px 0;
`
const ImageDiv = styled.div`
    height:25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
        img {
            width: 10em;
            padding: 1em;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        div {

            width: 10em;
            height: 10em;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient( rgba(255,0,0,0.2) 48%,rgba(0,0,0,0.2) 2%,rgba(255,255,255,0.2) 50%);
            border-radius: 50%;
            border: 2px solid rgba(0,0,0,0.2);
            box-shadow: 5px 5px 4px rgba(255,255,255,0.2);
        }
        
      
            div{
            -webkit-animation: rotate-center-loading 5s ease-in-out both infinite;
	        animation: rotate-center-loading 6s ease-in-out both infinite;
            }

` 
const MiddleDiv = styled.div `
`
export default function ComparePage() {

  

    

    const {compare, setCompare} = useContext(GlobalStateContext)

    const total1 = compare[0].data.stats.reduce((total,e)=> {
        return total + e.base_stat;
     },0)
 
     const total2 = compare[1].data.stats.reduce((total,e)=> {
        return total + e.base_stat;
     },0)

     let result = {};
        if (total1 > total2) {
            result = compare[0]
        } else if (total1 < total2) {
            result = compare[1]
        } else if (total1 === total2) {
            result = "draw"
        }



    if(compare[0] === undefined)
    {return <div><Header path={'goBack'} routeButton={'Voltar'} name={'Comparar'}/> <Loading/></div>}

    return (
        <div>
        <Header path={'goBack'} routeButton={'Voltar'} name={'Comparar'}/>
        <Content>
        <Section>
            <div className={'pokemon'}>
                <div className={"imgDiv"}>
                    <h2>{compare[0].data.name}</h2>
                    <img src={compare[0].data.sprites.front_default}></img>
                </div>
                
                <Stats>
                        <h2>Stats</h2>
                        {compare[0].data.stats.map(e => {
                            return <p key={e.stat.name}>{e.stat.name}: {e.base_stat}</p>
                        }) }
                        
                </Stats>
                <div className={"totalDiv"}> TOTAL: {total1}</div>
            </div>

            <MiddleDiv>
                <p>VS</p>

            </MiddleDiv>
            
            <div className={'pokemon'}>
                <div className={"imgDiv"}>
                    <h2>{compare[1] ? compare[1].data.name : "Selecione outro pokemon" }</h2>
                    <img src={compare[1] ? compare[1].data.sprites.front_default : null }></img>
                </div>
                
                <Stats>
                        <h2>Stats</h2>
                        { compare[1].data.stats.map(e => {
                            return <p key={e.stat.name}>{e.stat.name}: {e.base_stat}</p>
                        })}
                </Stats>
                <div className={'totalDiv'}> TOTAL: {total2}</div>
            </div>
        </Section>
    <ResultDiv>
        <h2>VENCEDOR:</h2>
    <h2>{result.data ? result.data.name : "empate"  }</h2>
    <ImageDiv>   
        <div></div>
        <img src={result.data ? result.data.sprites.front_default : null }></img>
        </ImageDiv>
    </ResultDiv>
    </Content>
        </div>
    )
}
