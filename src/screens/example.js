import { React, useState, useEffect } from 'react';
import axios from 'axios';


export const ExampleFetch = () => {

  const [emission, setEmission] = useState("");
 
  useEffect(() => {
    const getEmission = async() => {


      const headers1 = {
        'Authorization': 'Bearer W0CR772GJ2M5RHKW62SGS5YA51CB',
        'Content-Type': 'application/json'
      };
    
      const data1 = [
        {
          "custom_activity": {
              "label": "Accommodation",
              "region": "GB"
          },
          "parameters": {
              "money": 100,
              "money_unit": "gbp"
          }
      },
      
     
      ];

      const res = await axios.post('https://beta3.api.climatiq.io/custom-activities/batch', data1, {
        headers: headers1});
          const unknowndatainunknownformat = res.data;
          console.log(res);
          setEmission(unknowndatainunknownformat.results[0].co2e)

         
      
    }
    getEmission()
  }, []);




   

     
        
      
    
return (
      <div>
         <h1>Number</h1>
              
              {emission}
          
          
      </div>
    );
    
  }