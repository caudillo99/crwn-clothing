import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import React, { Component } from 'react';
import { connect } from 'react-redux'

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { selectCurrentUser } from './redux/user/user.selector'
import CheckoutPage from './pages/checkout/checkout.component.jsx'
import { setCurrentUser } from './redux/user/user.actions'
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component'
import Shop from "./pages/shop/shop.component";

import './App.css';


class App extends Component {
  
   // eslint-disable-next-line no-undef
   unsubscribeFromAuth = null;
   
   componentDidMount() {
      const {setCurrentUser} = this.props;
      
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
         if(userAuth){
            const userRef = await createUserProfileDocument(userAuth);
            
            userRef.onSnapshot(snapshot => {
               setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data()
               })
            });

         }else{
            setCurrentUser(userAuth);
         }
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render(){
      return (
         <div>
            <Router>
               <Header />
               <Switch>
                  <Route exact path='/' component={HomePage}/>
                  <Route path='/shop' component={Shop}/>
                  <Route exact path='/checkout' component={CheckoutPage} />
                  <Route exact path="/signin" 
                     render= {()=> 
                        this.props.currentUser ? (
                           <Redirect to='/'/>
                        ) : (
                           <SignInAndSignUp/>
                        )
                     }
                  />
               </Switch>
            </Router>
         </div>
      );
   }
}

const mapStateToProps = createStructuredSelector ({
   currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
