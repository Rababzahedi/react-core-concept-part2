import './App.css'
import Batesman from './Batesman';
import Counter from './Counter';

function App() {
  
  function handleClick() {
    alert("Button Clicked");
  }
  const handleClick3 = () => {
    alert("Clicked 3");
  }

  return (
    <div>
      <h3>Event Handling</h3>
      <Batesman/>
      <Counter/>
      <button onClick={handleClick}>CLick Me</button>
      <button onClick={handleClick3} >Click 3</button>
      <button onClick={() => alert("Click me 4")} >Click me 4</button>
    </div>
  )
}

export default App
