import { React, useState, useEffect } from 'react';
import { helper } from './calculator';
import axios from 'axios';
import '../styles/example.css'


export const ExampleFetch = ({validity, mot, km, days, gbp}) => {

  const [emissionOne, setEmissionOne] = useState("");
  const [emissionTwo, setEmissionTwo] = useState("");
 
  useEffect(() => {
    const getEmission = async() => {
      if (km&&days&&gbp&&mot){
        console.log(km);
      console.log(days);
        console.log(gbp); 
        console.log(mot) 
      
      const result = await helper(mot, km, days, gbp);
      
    
      setEmissionOne(result.emissionOne);
      setEmissionTwo(result.emissionTwo)
      }
    }
    getEmission()
  }, [validity, mot, km, days, gbp]);




   

     
        
      
    
return (
      <div className='resultwindow'>
         <h1 id='resulttext'>Your result</h1>
              
             {/* {emissionOne}
              <br/>
              {emissionTwo}
            <br/>}*/}
            <div className='resultnumber'>{emissionOne+emissionTwo} </div>
              <p className='kgco2'>in kg of CO2</p>
          
          
      </div>
    );
    
  }