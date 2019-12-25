import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route,Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (

    <>
    <Switch>
    hello from app
<Route exact path='/' component={Home}/>
   
    <Route exact path='/rooms/' component={Rooms}/>
    <Route exact path='/rooms/:single' component={SingleRoom}/>
    <Route component={Error}/>
    
    </Switch>
    </>
  );
}

export default App;
