import React, {useState} from "react"

function App() {
  const [startNum, setStartNum] = useState(0)
  const [endNum, setEndNum] = useState(0)
  const [display, setDisplay] = useState([])
  let msg = [];

  function count(){
    console.log("counting...")
    console.log("Starting from: " + startNum)
    console.log("Ending from: " + endNum)
    let range = Math.abs(startNum - endNum)
    if(startNum > endNum){
      console.log("counting downwards...")
      msg.push(<li>Counting downwards...</li>)
      for(let i = 0; i <= range; i++){
        msg.push(<li key={i}>{startNum - i}</li>)
      }
    }else if(endNum > startNum){
      console.log("counting upwards...")
      msg.push(<li>Counting upwards...</li>)
      for(let i = 0; i <= range; i++){
        msg.push(<li key={i}>{startNum + i}</li>)
      }
    }else if(endNum === startNum){
      msg.push(<li>No Counting.</li>)
      console.log("No counting...")
    }
    setDisplay(msg)
  }
  return (
    <main>
      <h1 id="title">Counting Numbers, Up & Down</h1>
      <section>
        <label htmlFor="start-num">Counting From: </label>
        <input onChange={(e) => setStartNum(e.target.valueAsNumber)} name="start-num" type="number" placeholder="Enter a Number to Start"></input>
        <br></br>
        <label htmlFor="end-num">Counting To: </label>
        <input onChange={(e) => setEndNum(e.target.valueAsNumber)} name="end-num" type="number" placeholder="Enter a Number to End"></input>
        <br></br>
        <input onClick={() => count()} type="button" value="Submit"></input>
      </section>
      <section>
        <ul>
          {display}
        </ul>
      </section>
    </main>
  );
}

export default App;
