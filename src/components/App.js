import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// Temporary Pages until I can install router
import Home from '../layouts/Home';
import ProductLanding from '../layouts/ProductLanding';
import Product from '../layouts/Product';
import Styleguide from '../layouts/Styleguide';
import Wholesale from '../layouts/Wholesale';




function App() {
  return (
    <Router>
        <Header />
         <Route render={({ location }) => (

            
            <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/styleguide" component={Styleguide} />
                <Route path="/product-landing" component={ProductLanding} />
                <Route path="/product" component={Product} />
                <Route path="/wholesale" component={Wholesale} />
            </Switch>

            )}
        />
        <Footer />
    </Router>
  );
}

export default App;
