import React from "react"
import { Route } from "react-router-dom"
import landingPage from "./componets/landing_page/landing_page.jsx";
import Home from "./componets/home/home.jsx";
import Detail from "./componets/detail/detail.jsx";
import CreateGame from "./componets/create/create.jsx";
import './App.css';



function App() {
  return (
    <div className="App">
      <Route exact path='/' component={landingPage} />
      <Route exact path='/home' component={Home}/>
      <Route exact path='/home/Create'component={CreateGame}/>
      <Route exact path='/home/videogames/:id' component={Detail}/>
    </div>
  );
}

export default App;
