import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from './Home';
import Characters from './Characters';
import Character from './Character';
import Locations from './Locations';
import Episodes from './Episodes';
import About from './About';
import NotFound from './NotFound';

function Router({ location }) {
    return (
    <Switch location={ location }>
        <Route path='/' component={ Home } exact/>
        <Route path='/personagens' component={ Characters } />
        <Route path='/personagem/:id' component={ Character } />
        <Route path='/locais' component={ Locations } />
        <Route path='/episodios' component={ Episodes } />
        <Route path='/sobre' component={ About } />
        <Route component={ NotFound } />
    </Switch>
    )
}

export default withRouter(Router);