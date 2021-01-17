import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import GlobalStateContext from '../Global/GlobalStateContext'


const HeaderMain = styled.div`
    font-family: 'Ketchum';
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #9D0101;
    padding: 0 1em 0;
    box-shadow: inset 2px 2px black, 2px 2px black;
    
    .mobile {
        display: none;
    }

    @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) { 
      flex-direction: column;
      .mobile {
        display: block;
      }
      .addToPokedex {
          display: block;
      }
  }

    h1 {
        font-size: 3em;
        color: #fbd743;
        text-shadow: 3px 3px royalblue;
        flex-grow: 100;
    }
`
const Button = styled.button `
    cursor: pointer;
    width: 150px;
    font-family: 'Pokemon8bit';
    border: none;
    padding: 0.8em;
    box-shadow: inset 2px 2px black, 2px 2px black;
    font-size: x-small;

    @media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) { 
      
      display: none;
  }

`
export default function Header(props) {


    const history = useHistory();
    const onClickButton = () => { 
        if (props.path === "goBack") {
            history.goBack()
        } else { history.push(props.path) }
    }
 
    const {list, setList, pokedex, setPokedex, offset, setOffset} = useContext(GlobalStateContext)
    
    if (!list[0] && !pokedex[0]) {
        return <HeaderMain>
                    <h1>Loading...</h1>
                </HeaderMain>
    }
    
    
    const addToPokedex = () => {
        const position = pokedex.findIndex((e) => e.data.id === props.id)
        if(position === -1) {
            setPokedex([...pokedex, props.pokemon])
           
            const newArray = list.filter(e => {
                return e.data.id !== props.id
            })
            setList(newArray)
        } else {
            setList([...list, props.pokemon])
            const newArray = pokedex.filter(e => {
                return e.data.id !== props.id
            })
            setPokedex(newArray)
        }
    }

    return (
        <HeaderMain>
            <Button onClick={onClickButton}>{props.routeButton}</Button>
            <h1>{props.name}</h1>
            {props.type === 'info'? <Button  className={'addToPokedex'} onClick={addToPokedex}>{props.buttonText}</Button> : <div></div>}
            <Button className={'mobile'} onClick={onClickButton}>{props.routeButton}</Button>
        </HeaderMain>
    )
}
