import React from 'react';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import Done from './pages/done/index';
import Todo from './pages/todo/index';

const Routes = () =>{

    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Todo} />
            <Route exact path="/done" component={Done} /> 
        </Switch>
    </BrowserRouter>
    )

}

export default Routes
