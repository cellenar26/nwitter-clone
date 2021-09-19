import AuthForm from 'components/AuthForm';
import { authService, firebaseInstance } from "firebase";
import { useState } from "react";

const Auth = () => {
  
  
  const onSocialClick = async(event) => {
       const { target: {name},} = event;
       let provider;
       if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
       }
       else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
       }
       const data = await authService.signInWithPopup(provider)
     //   console.log(data);
     //   console.log(data.user.uid);
  }
  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">Continue With Google</button>
        <button onClick={onSocialClick} name="github">Continue With Github</button>
      </div>
    </div>
  );
};

export default Auth;
