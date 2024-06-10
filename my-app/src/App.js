import SearchIcon from '@mui/icons-material/Search';
import ReplayIcon from '@mui/icons-material/Replay';
import { useState } from 'react';
import './App.css';
import { Data } from './data';
import Table from './Table';
import logo from './images.png';
function App() {
  const [query,setQuery]=useState("");
  const search=(data)=>{
    return data.filter((item)=>item.akronim.includes(query))
  };
  const [filteredData, setFilteredData] = useState(Data);

  const handleSearch = () => {
    setFilteredData(Data.filter((item) => item.akronim.toLowerCase().includes(query.toLowerCase())));
  };

  const handleReload = () => {
    setQuery("");
    setFilteredData(Data);
  };
  return (
    <div className="App">
      <img src={logo} alt="Logo" className="header-logo" />
      <h1>ACR Finder</h1>
      
      <div className='input-part'>
        <input type='text' placeholder='Search..' value={query} onChange={(e)=>setQuery(e.target.value)} />
        <button onClick={handleSearch}> <SearchIcon/></button>
        <button onClick={handleReload}> <ReplayIcon/></button>
      </div>
      {filteredData.length > 0 ? <Table data={filteredData} /> : <p className='error'>No Results</p>}
      
    
    </div>
  );
}

export default App;
