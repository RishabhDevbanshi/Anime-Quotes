import React , {useState} from "react";
import Quotes from "./components/Quotes";

function App() {
  const [click , setClick] = useState(1);
  const handleClick = ()=>{
    setClick(click + 1);
  }
  return (
    <div className="App">
      <Quotes click={click} />
      <button onClick={handleClick} >Generate a new quote</button>
    </div>
  );
}

export default App;
