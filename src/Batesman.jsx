import React from 'react'
import { useState } from 'react'

function Batesman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    };
    const handleFour = () => {
        const updatedRuns = runs + 4;
        setRuns(updatedRuns);
    };
    const handleTwo = () => {
        setRuns(runs +2);
    };
    const handleThree = () => {
        setRuns(runs +3);
    };
    const handleFive = () => {
        setRuns(runs +5);
    };
    const handleSix = () => {
        setSixes(sixes + 1);
        setRuns(runs +6);
    };

  return (
    <div>
          <h3>Player: Bangladeshi Batsman</h3>
          {runs >= 50 && runs < 100 && <p>🎉 Congratulations! You made a 50! ({runs}) </p>}
          {runs >= 100 && runs <= 150 && <p>🏆 Congratulations! You made a century!</p>}
          {runs > 150 && <p>🔥 Congratulations! You scored 150+!</p>}
          <h1>Score:{runs} </h1>
          <h2>Six Count : {sixes}</h2>
          <button onClick={handleSingle}>Singles</button>
          <button onClick={handleTwo}>Two</button>
          <button onClick={handleThree}>Three</button>
          <button onClick={handleFour}>Four</button>
          <button onClick={handleFive}>Five</button>
          <button onClick={handleSix}>Six</button>
    </div>
  )
}

export default Batesman
