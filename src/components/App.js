import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from 'firebase';

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoogedIn] = useState(false);
  const [userObj, setUserObj] = useState(null)

const refreshUser = () => {
  const user = authService.currentUser
  setUserObj({
    uid: user.uid,
    displayName: user.displayName,
    updateProfile: (args) => user.updateProfile(args)
  })
}

  useEffect(()=> {
    authService.onAuthStateChanged((user) => {
      if (user) {
        
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args) => user.updateProfile(args)
        })
      } else {
        setIsLoogedIn(false)
      }
      setInit(true)
    })
  },[])
  return (
    <>
      {init? <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} refreshUser={refreshUser}/>: "Initializing..."}
      
    </>
  );
}

export default App;
