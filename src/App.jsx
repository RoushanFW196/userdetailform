
import './App.css';
import Form from './Form';
import Table from "./Table"
import {useState,useRef,useEffect} from "react";

function App() {
  const [data,setData]=useState([])
  const sendData=(data)=>{
    setData(data)
  }
  return (
    <div className="App">
     
    <Form sendData={sendData} />
    <Table data={data}/> 
 
    </div>
  );
}

export default App;
