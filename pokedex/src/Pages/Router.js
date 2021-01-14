import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home.js'
import Pokedex from './Pokedex.js'
import Info from './Info.js'

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <Home />
                    </Route>
                    
                    <Route exact path={"/pokedex"}>
                        <Pokedex />
                    </Route>
                    
                    <Route exact path={"/poke-info"}>
                        <Info />
                    </Route>

                    <Route>
                        <div>Erro 404 - Página não encontrada</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
