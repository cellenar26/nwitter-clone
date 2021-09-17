import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from 'firebase';

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoogedIn] = useState(false);
  const [userObj, setUserObj] = useState(null)

  useEffect(()=> {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoogedIn(user)
        setUserObj(user)
      } else {
        setIsLoogedIn(false)
      }
      setInit(true)
    })
  },[])
  return (
    <>
      {init? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/>: "Initializing..."}
      
    </>
  );
}

export default App;
