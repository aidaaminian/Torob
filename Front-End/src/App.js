import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Browse from './components/Browse'
import Product from './components/Product'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/browse/:headid" component={Browse}/>
              <Route exact path="/browse/:headid/:categoryid/" component={Browse}/>
              <Route exact path="/browse/:headid/:categoryid/:subcategoryid" component={Browse}/>
              <Route path="/products/:productid" component={Product}/>
            </Switch>
          </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
