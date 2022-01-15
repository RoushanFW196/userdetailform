
import React from 'react';
import {useState,useRef,useEffect} from "react";
import './App.css';

const Form=({sendData})=>{
   const fileref=useRef(null);

   const [list,setList]=useState([])

   sendData(list)
const getData=()=>{
    fetch('http://localhost:3001/users').then((res)=>res.json()).then((d)=>setList(d))}

   useEffect(() => {
    getData()
   }, [])
  
    const[form ,SetForm]=useState({
        username:"",
        Address:"",
        Age:0,
        department:"",
        Salary:"",
        
        file:""
    })

     const inputevent=(event)=>{
        //const {name,value}=event.target;
       // console.log(fileref.current.files)
        let value =
        event.target.type === "checkbox" ? event.target.checked : event.target.value;
           if(event.target.type=="file"){
                  value=fileref.current.files[0].name;
                     
           }
        SetForm({...form,[event.target.name]:value})
     }

     const handleSubmit=(event)=>{
         
         event.preventDefault();
         console.log(form)
         fetch("http://localhost:3001/users",{
             method: "POST",
             body:JSON.stringify(form),
             headers: {'Content-Type': 'application/json'}
         }).then(()=>{
             getData()
         })
     }


    return(
        <>
        <form className="user-form" onSubmit={handleSubmit}> 
          <label>Name</label>
          <input type="text" placeholder=" Enter your Name" name="username" value={form.username} onChange={inputevent}/><br/>
          <label>Address</label>
          <input type="text" placeholder="Enter Address" name="Address" value={form.Address} onChange={inputevent} /><br/>
          <label>Age</label>
          <input type="number" placeholder="Enter Age" name="Age" value={form.Age} onChange={inputevent}/><br/>
          <label>Select Your Department</label>
          <select onChange={inputevent} name="department" value={form.department} >
               <option value="">Enter Department</option>
              <option value="Graphics">Graphics</option>
              <option value="Account">Account</option>
              <option value="Design">Design</option>
              <option value="Animation">Animation</option>
              <option value="WebDevelopment">web development</option>
          </select><br/>
          <label>Salary</label>
      <input type="number" placeholder="Salary" name="Salary" value={form.Salary} onChange={inputevent}/><br/>
     <label>Marrital Status:</label><br/>
      <input type="Checkbox" name="maritalstatus" value={form.maritalStatus} onChange={inputevent}/>
      <label>Married</label><br/>
    
       
       <label>Upload profile photo</label>
       <input type="file" ref={fileref} name="file"  onChange={inputevent} /><br/>
  <input type="submit" value="Submit"/><br/>
  </form>


        </>
    )


}

export default Form;