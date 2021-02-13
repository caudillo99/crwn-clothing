import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import Shop from "./pages/shop/shop.component.jsx";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import './App.css';

const SomethingElse = (props) => {
   console.log('params',props.params);
   return(
      <div>
         <h1>{`Sth is equal to ${props.match.params.sth}`}</h1>
      </div>
   )
}

function App() {
   return (
      <div>
         <Router>
            <Header />
            <Switch>
               <Route exact path="/" component={HomePage}/>
               <Route exact path="/shop" component={Shop}/>
               <Route path="/hats/:sth" component={SomethingElse}/>
            </Switch>
         </Router>
      </div>
  );
}

export default App;
