import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Browse from './components/Browse'
import Product from './components/Product'
import Shop from './components/Shop'
import AddShop from './components/AddShop'
import ShopOwnerAccount from './components/ShopOwnerAccount'
import AddProduct from './components/AddProduct'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/browse/:headid" component={Browse}/>
              <Route exact path="/browse/:headid/:categoryid/" component={Browse}/>
              <Route path="/browse/:headid/:categoryid/:subcategoryid" component={Browse}/>
              <Route path="/products/:productid" component={Product}/>
              <Route path="/addshop" component={AddShop}/>
              <Route path="/shop" component={Shop}/>
              <Route path="/shopowneraccount" component={ShopOwnerAccount}/>
              <Route path="/addproduct" component={AddProduct}/>
            </Switch>
          </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
