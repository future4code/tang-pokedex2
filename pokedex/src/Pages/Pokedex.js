import React, {useContext} from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'
import GlobalStateContext from '../Global/GlobalStateContext'

export default function Pokedex() {
    const {list, setList, pokedex, setPokedex} = useContext(GlobalStateContext)

    if (pokedex === undefined) {
        return <div> Loading...</div>
    }
    return (
        <div>
            <Header path={'/'} routeButton={'Voltar para lista de Pokemons'} name={'Pokedex'}/>
            {pokedex.map(e => {
                return <Card
                            id={e.data.id}
                            key={e.data.id}
                            name={e.data.name}
                            img={e.data.sprites.front_default}
                            pokemon={e}
                            buttonText={"Remover da Pokedex"}
                        />
            })}
        </div>
    )
}
