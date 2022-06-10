import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Stars from './Stars';

function App() {
  
 const [cont, setCon]=useState(0);
 const [data, setData]=useState(0);
  useEffect(()=>{
    console.log("me rendericé");
    fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => setData(data));

  }, [data])

const{results}=data;
console.log(results);
  return (
    <div className="App">

      <button onClick={()=>setCon(cont+1)}>Contador++</button>
      <button onClick={()=>setCon(cont-1)}>Contador--</button>
      
      <p>{cont}</p>
      <Stars results={results}/>
    </div>
  );
}

export default App;
