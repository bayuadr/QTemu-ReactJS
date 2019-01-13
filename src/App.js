import React, { Component } from 'react';
import Home from './Route/Home';
import CreateMeetUp from "./Route/CreateMeetUp";
import Explore from "./Route/Explore";
import View from "./Route/View";
import NotFound from "./Route/NotFound";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './Redux/index'
import Join from './Route/Join'
import {Provider} from 'react-redux'

class App extends Component {
 
  render() {
    
    return (
      <Provider store={store}>
      <BrowserRouter>
         <Switch> 
            <Route exact path="/" component={Home}/>
            <Route exact path="/CreateMeetUp" component={CreateMeetUp}/>
            <Route exact path ="/View/:index" component={View}/>
            <Route exact path="/Explore" component={Explore}/>
            <Route exact path='/Join' component={Join}/>
            <Route exact path="/NotFound" component ={NotFound}/>
           
          </Switch>   
      </BrowserRouter>
      </Provider>
      
    );
  }
}

export default App;
