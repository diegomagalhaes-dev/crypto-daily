import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Deshboard from './Deshboard'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/deshboard'>
                <Deshboard />
            </Route>
        </Switch>
    )
}
export default Routes;