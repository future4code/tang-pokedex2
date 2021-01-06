import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const HeaderMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: red;
    padding: 0 1em 0;
`

export default function Header(props) {
    
    const history = useHistory();
    const onClickButton = () => {
        history.push(props.path)
    }

    return (
        <HeaderMain>
            <button onClick={onClickButton}>{props.routeButton}</button>
            <h1>{props.h1}</h1>
            {props.type === 'info'? <button>Adicionar/Remover da Pokedex</button> : <div></div>}
        </HeaderMain>
    )
}
