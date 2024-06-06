
import { useState } from 'react';
import './App.css';
import { Data } from './data';
import Table from './Table';
function App() {
  const [query,setQuery]=useState("");
  const search=(data)=>{
    return data.filter((item)=>item.akronim.includes(query))
  }
  return (
    <div className="App">
      <h1>ACR Finder</h1>
      <Table data={search(Data)}/>
    
    </div>
  );
}

export default App;
