import React from 'react'
import Header from './Components/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Todo from './Components/Todo'
import RecemtlyDone from './Components/RecemtlyDone'
function App() {
    return (
        <>
            <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path='/'>
                        <Todo />
                    </Route>
                    <Route exact path='/recentlydone'>
                        <RecemtlyDone />
                    </Route>

                </Switch>


            </BrowserRouter>
        </>
    )
}

export default App
