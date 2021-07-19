import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Deshboard from './Deshboard'

export default () => {
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
