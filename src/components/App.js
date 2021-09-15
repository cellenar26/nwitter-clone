import { useState } from "react";
import AppRouter from "components/Router";

function App() {
  const [isLoggedIn, setIsLoogedIn] = useState(false);
  return (
    <>
      <AppRouter />
      <footer>&copy; {new Date().getFullYear()} Nwitter-clone</footer>
    </>
  );
}

export default App;
