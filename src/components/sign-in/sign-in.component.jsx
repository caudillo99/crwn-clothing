import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'
import {signInWithGoogle} from '../../firebase/firebase.utils.js'

import './sign-in.styles.scss'

class SignIn extends Component {
   constructor(props) {
      super(props);
      this.state = {
         email:'',
         password:''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }

   handleSubmit(e){
      e.preventDefault();

      this.setState({ email:'', password:'' });
   } 

   handleChange(e){
      const { value, name } = e.target;
      this.setState({ [name]: value });
   }

   render() {
      const {email, password} = this.state;
      return (
         <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>

            <form>
               <FormInput 
                  name='email'
                  type='email'
                  handleChange={this.handleChange}
                  label="Email"
                  value={email} 
                  required
               />
               <FormInput
                  name='password' 
                  type='password' 
                  handleChange={this.handleChange}
                  label="Password"
                  value={password} 
                  required
               />

               <div className='buttons'>
                  <CustomButton > Sign In </CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                     Sign in with Google 
                  </CustomButton>
               </div>
               
            </form>
         </div>
      );
   }
}

export default SignIn;