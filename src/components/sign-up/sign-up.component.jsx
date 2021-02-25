import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils.js'

import './sign-up.styles.scss'

class SignUp extends Component {
   constructor() {
      super();

      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   /* 
   This syntax is experimental and not standarized yet.
   */

   async handleSubmit( e ){
      e.preventDefault();

      const {displayName, email, password, confirmPassword} = this.state;
      
      if(password !== confirmPassword){
         alert("Password don't match");
         return;
      }

      try {
         const {user} = await auth.createUserWithEmailAndPassword(email, password);
         
         await createUserProfileDocument(user, {displayName});
         
         this.setState({
            displayName:'',
            email: '',
            password: '',
            confirmPassword: ''
         });
      } catch (error) {
         console.error(error);
      }
   };


   // eslint-disable-next-line no-undef
   handleChange (e) {
      const {name, value} = e.target;
      this.setState({ [name]:value })
   }

   

   render() {
      const { displayName, email, password, confirmPassword } = this.state;
      return (
         <div className='signup'>
            <h2 className='title'>I do not have a account</h2>
            <span> Sign up with your email and password </span>
            <form className='signup-form' onSubmit={this.handleSubmit}>
               <FormInput
                  type='text'
                  name='displayName'
                  value = {displayName}
                  onChange={this.handleChange}
                  label = 'Display Name'
                  required
               />
               <FormInput
                  type='email'
                  name='email'
                  value = {email}
                  onChange={this.handleChange}
                  label = 'Email'
                  required
               />
               <FormInput
                  type='password'
                  name='password'
                  value = {password}
                  onChange={this.handleChange}
                  label = 'Password'
                  required
               />
               <FormInput
                  type='password'
                  name='confirmPassword'
                  value = {confirmPassword}
                  onChange={this.handleChange}
                  label = 'Confirm Password'
                  required
               />
               <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
         </div>
      )
   }
}

export default SignUp;