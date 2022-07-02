import { React, useState, useEffect } from 'react';
import axios from 'axios';


export const ExampleFetch = () => {

  const [emission, setEmission] = useState({});
 
  useEffect(() => {
    const getEmission = async() => {


      const headers1 = {
        'Authorization': 'Bearer W0CR772GJ2M5RHKW62SGS5YA51CB',
        'Content-Type': 'application/json'
      };
    
      const data1 = {
        "emission_factor": "fuel_type_asphalt_and_road_oil-fuel_use_stationary_combustion",
        "parameters": {
            "volume": 15,
            "volume_unit": "l"
        }
      };
     
  
      const res = await axios.post('https://beta3.api.climatiq.io/estimate', data1, {
        headers: headers1});
          const unknowndatainunknownformat = res.data;
          console.log(res);
          // console.log(unknowndatainunknownformat);
          setEmission(unknowndatainunknownformat)
          // return { unknowndatainunknownformat };
      
    }
    getEmission()
  }, []);




   

     
        
      
    
return (
      <div>
         <h1>Number</h1>
              
          {emission.co2e}
      </div>
    );
    
  }