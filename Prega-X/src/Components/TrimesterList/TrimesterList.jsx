import React from 'react';
import { Route, Router, Routes } from 'react-router';
import { Link } from 'react-router-dom';

import { trimesterPhase,trimester } from '../../data';


import './TrimesterList.css';


export default function TrimesterList() {
  
  const TrimesterCard=({name,weeks})=>(
    
  <div className='TrimesterPhaseCard'>
    <h3>{name}</h3>
    <p>{weeks}</p>
  </div>
    
    
  )  
  
  return (
 
<div className="selectTrimesterContainer">
    <h2>Select Trimester</h2>
    {
      trimesterPhase.map((trimester)=>( 
       <Link to={`/trimester/${trimester.id}`} key={trimester.id}>
         <TrimesterCard {...trimester} />
       </Link>
      ))
    }
     
    </div>

   
   
   
    
  
  )


      
    
     
     
    

    
}

