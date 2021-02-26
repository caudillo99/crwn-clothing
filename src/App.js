import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import Shop from "./pages/shop/shop.component.jsx";
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions'
import {connect} from 'react-redux'
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
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/shop" component={Shop}/>
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

const mapStateToProps = ({user}) => ({
   currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
