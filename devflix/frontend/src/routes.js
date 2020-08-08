import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import VidCadastro from './components/VidCadastro';
import CatCadastro from './components/CatCadastro';

// const 404Page = () => (<div>Erro 404</div>)

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                {/* <Route component={404Page}/> */}
                <Route path="/" exact component={Home} />
                <Route path="/cadastro/video" component={VidCadastro}/>
                <Route path="/cadastro/video" component={CatCadastro}/>
            </Switch>
        </BrowserRouter>
    );
}