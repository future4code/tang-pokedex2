import React, {useContext} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import GlobalStateContext from '../Global/GlobalStateContext'


    const MainCard = styled.div`
        
        width: 250px;
        display: flex;
        flex-direction: column;
        margin: 16px 16px;
        text-shadow: 2px 2px 3px lightsteelblue;
        box-shadow: inset 2px 2px black, 2px 2px black, 10px 10px  5px black;
        background: linear-gradient( #e1e3f5 2%, white 98%);

        :hover {
            background: whitesmoke;
        }
    `

    const ButtonDiv = styled.div`
        display: flex;
        margin: 8px 12px;
    `
    const ImageDiv = styled.div`
        height: 80%;
        width: 100%;
        position: relative;
        img {
            padding: 1em;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        div {
            margin: auto;
            width: 10em;
            height: 10em;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient( rgba(255,0,0,0.2) 48%,rgba(0,0,0,0.5) 2%,rgba(255,255,255,0.2) 50%);
            border-radius: 50%;
            border: 2px solid rgba(0,0,0,0.5);
            box-shadow: 5px 5px 4px rgba(255,255,255,0.2);
        }
        
        :hover{
            div{
            -webkit-animation: rotate-center 0.6s ease-in-out both;
	        animation: rotate-center 0.6s ease-in-out both;
            }

            img {
                -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
                top: 10%;
                left: 25%;
            }
        }
    `
    const Button = styled.button`
        margin:0 6px;
        font-family: 'Pokemon8bit';
        font-size: 0.6em;
        border: none;
        box-shadow: inset 2px 2px black, 2px 2px black, 3px 3px white;
        cursor: pointer;

        :hover {
            background-color: white;
        }

        
    `
    const CompareButton  = styled.button `
        margin: 0 17px 6px;
        font-family: 'Pokemon8bit';
        font-size: 0.6em;
        border: none;
        box-shadow: inset 2px 2px black, 2px 2px black, 3px 3px white;
        cursor: pointer;

        :hover {
            background-color: white;
        }
    `
export default function Card(props) {

    const {list, setList, pokedex, setPokedex, offset, setOffset, compare, setCompare} = useContext(GlobalStateContext)

    const history = useHistory()
    const onClickInfo = () => {
        history.push(`/poke-info/${props.name}`)
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

    const onClickCompare = () => {
        if(compare.length < 2 ) {
            setCompare([...compare, props.pokemon])
        }
    }



    return (
        <MainCard>
            <h3>{props.name.toUpperCase()}</h3>
            <ImageDiv>
                <div></div>
                <img src={props.img} alt={props.name}/>
                
            </ImageDiv>
            <ButtonDiv>
                <Button onClick={addToPokedex}>{props.buttonText}</Button>
                <Button onClick={onClickInfo}>Ver informações</Button>
            </ButtonDiv>
            <CompareButton onClick={onClickCompare}>Comparar</CompareButton>
        </MainCard>
    )
}
