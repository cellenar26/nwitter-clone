import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from 'firebase';

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoogedIn] = useState(false);
  useEffect(()=> {
    authService.onAuthStateChanged((user) => {
      if (user === true) {
        setIsLoogedIn(user)
      } else {
        setIsLoogedIn(false)
      }
      setInit(true)
    })
  },[])
  return (
    <>
      {init? <AppRouter isLoggedIn={isLoggedIn}/>: "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Nwitter-clone</footer>
    </>
  );
}

export default App;
