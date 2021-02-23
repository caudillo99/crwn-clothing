import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import Shop from "./pages/shop/shop.component.jsx";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import {auth} from './firebase/firebase.utils'
import './App.css';


class App extends Component {
   constructor(){
      super();
      this.state= {
         currentUser: null
      }
     
   }

   // eslint-disable-next-line no-undef
   unsubscribeFromAuth = null;
   
   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
         this.setState( {currentUser: user} );
         console.log('currentUser',this.state.currentUser);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render(){
      return (
         <div>
            <Router>
               <Header currentUser={this.state.currentUser} />
               <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/shop" component={Shop}/>
                  <Route exact path="/signin" component={SignInAndSignUp}/>
               </Switch>
            </Router>
         </div>
      );
   }
}

export default App;
