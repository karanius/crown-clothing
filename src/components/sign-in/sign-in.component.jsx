import React from 'react';

import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-instyles.scss';

class SignIn extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email:'', password:'' })
  }

  handleChange=(event)=>{
    const { value , name } = event.target;

    this.setState({ [name]: value })
  }

  render(){
    return(
      <div className='sign-in' >
        <h2 className="title" >I already have an account</h2>
        <span>sign in with your eamil andpassword</span>

        <form onSubmit={this.handleSubmit} >
          <FormInput label={"Email"} handleChange={this.handleChange} name='email' type='email' value={this.state.email} required />
          <FormInput label={'Password'} handleChange={this.handleChange} name='password' type='password' value={this.state.password} required />
          <div className='buttons'>
            <CustomButton type='submit' > Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In With Google </CustomButton>
          </div>
        </form>
      </div>
    )
  }


}

export default SignIn;