import React, {useState} from 'react';
import './App.css';
import {Input} from './components/Input';
import demoJsonData from './MOCK_DATA.json';

function App() {

    const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="App">
      <h1>Search Bar</h1>
      <Input onChange={e =>{
        setSearchTerm(e.target.value)
      }}/>
      {demoJsonData.filter(val =>{
        if(searchTerm === ""){
          return val
        }else if(val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
      }).map((val, key)=>{
        return(
          <div className="container" key={key}>
            <p>{val.first_name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
