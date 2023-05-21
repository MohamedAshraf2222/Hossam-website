import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init()

  }, [])
  
  return (
    <>
      <Home />
    </>
  );
}

export default App;
