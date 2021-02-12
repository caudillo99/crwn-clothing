import React from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';


const HatsPage = () => (
   <h1>HAT PAGE</h1>
);
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
         <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/hats" component={HatsPage}/>
            <Route path="/hats/:sth" component={SomethingElse}/>
         </Switch>
      </Router>


      </div>
  );
}

export default App;
