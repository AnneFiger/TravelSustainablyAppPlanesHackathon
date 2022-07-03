import { React, useState, useEffect } from 'react';
import { helper } from './calculator';
import axios from 'axios';


export const ExampleFetch = ({validity, km, days, gbp}) => {

  const [emissionOne, setEmissionOne] = useState("");
  const [emissionTwo, setEmissionTwo] = useState("");
 
  useEffect(() => {
    const getEmission = async() => {
      if (km&&days&&gbp){
        console.log(km);
      console.log(days);
        console.log(gbp);  
      
      const result = await helper("Air_travel", km, days, gbp);
      
    
      setEmissionOne(result.emissionOne);
      setEmissionTwo(result.emissionTwo)
      }
    }
    getEmission()
  }, [validity, km, days, gbp]);




   

     
        
      
    
return (
      <div>
         <h1>Number</h1>
              
             {/* {emissionOne}
              <br/>
              {emissionTwo}
              <br/>}*/}
              {emissionOne+emissionTwo} 
              <p>kg of CO2</p>
          
          
      </div>
    );
    
  }