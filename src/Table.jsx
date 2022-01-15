
import React,{useState,useEffect} from 'react'
import "./App.css"
import Form from './Form';
import Itemsincol from "./Tableitems";

    const Tablecontent=({data})=>{

     
       return (
           
           <div className="user-table">
     
         <h1>hello</h1>
         <table>
         <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>addresss</th>
                    <th>department</th>
                    <th>salary</th>
                    <th>marital</th>
                    <th>profile</th>
                </tr>

            </thead>
        
        {
            data.map((el)=>(
            //  const  {username,Age,Salary,Maritalstatus,Department,Address}=e;
            
            <tr>
                        
                            <td> <p className="data"> {el.username}</p></td>
                            <td><p className="data"> {el.Age}</p></td>
                            <td><p className="data">{el.Address}</p></td>
                            <td><p className="data">{el.department}</p></td>
                            <td><p className="data">{el.Salary}</p></td>
                            <td><p className="data">{el.maritalstatus==true ? <p>Yes</p>:<p>No</p> }</p></td>
                             <td> <img id="imkkk" src={el.file} alt="" /></td> 
                        </tr>

            ))
        }
     </table>
           </div>
    
       )
 }

 export default Tablecontent;