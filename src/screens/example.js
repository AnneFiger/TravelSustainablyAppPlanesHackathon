import { React, useState, useEffect } from 'react';
import axios from 'axios';
import {
    Box,
    Text,
  } from '@chakra-ui/react';
import {Nav} from '../components/bottom-nav'


export const ExampleFetch = () => {

  const [emissionOne, setEmissionOne] = useState("");
  const [emissionTwo, setEmissionTwo] = useState("");
 
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

      {
        "custom_activity": {
            "label": "Air_travel",
        },
        "parameters": {
            "passengers": 1,
            "distance": 500,
            "distance_unit": "km"
        }
    }
      
     
      ];

      const res = await axios.post('https://beta3.api.climatiq.io/custom-activities/batch', data1, {
        headers: headers1});
          const unknowndatainunknownformat = res.data;
          console.log(res);
          setEmissionOne(unknowndatainunknownformat.results[0].co2e)
          setEmissionTwo(unknowndatainunknownformat.results[1].co2e)
         
      
    }
    getEmission()
  }, []);




   

     
        
      
    
return (
      <div>
         <h1>Number</h1>
              
             {/* {emissionOne}
              <br/>
              {emissionTwo}
              <br/>}*/}
              {emissionOne+emissionTwo}
          
          <Nav />
      </div>
    );
    
  }