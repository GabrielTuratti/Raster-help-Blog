import React from 'react';
import { BrowserRouter, Route ,Switch } from 'react-router-dom';

import home from './pages/home/home';
import adm from './pages/adm/adm';
import release from './pages/release/release';


export default function Routes() {
        return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={home}/>
                <Route path="/adm" component={adm} />
                <Route path="/release" component={release} />
            </Switch>
        </BrowserRouter>
    )
}   