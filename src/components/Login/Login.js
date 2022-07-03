import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo 1 (1).png'
import './Login.css'
import auth from '../firebase.init'
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
  ] = useSignInWithEmailAndPassword(auth);
  const [user, uLoading, uError] = useAuthState(auth);
  

    const navigate = useNavigate();
    const handleLogIn=(e)=>{
        e.preventDefault()
        const email =e.target.email.value;
        const password =e.target.password.value;
        // console.log(email,password)
        signInWithEmailAndPassword(email, password)
    }
    if(user){
      navigate('/')
  }
    return (
        <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card my-5">

          <form onSubmit={handleLogIn} class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img src={logo} class="img-fluid profile-image-pic img-thumbnail  my-3"
                width="200px" alt="profile"/>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" name='email' id="Username" aria-describedby="emailHelp"
                placeholder="Email" />
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" name='password' id="password" placeholder="password"/>
            </div>
            <div class="text-center"><button type="submit" class=" g-btn mb-4">Login</button></div>
            <button className='g-btn' onClick={() => signInWithGoogle()}>Sign In With Google</button>
          </form>
        </div>
              
      </div>
    </div>
  </div>
    );
};

export default Login;