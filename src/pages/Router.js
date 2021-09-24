import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import StartUp from "./StartUp"
export default function Router() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/startup" component={StartUp}/>
        </BrowserRouter>
    )
}
