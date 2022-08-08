import { React, useState, useEffect } from 'react';
import axios from 'axios';


export const helper = async(modeOfTransportation, distance, lengthOfStay, costOfAccommodation) => {



        const headers1 = {
          'Authorization': 'Bearer <key>',
          'Content-Type': 'application/json'
        };
      
        const data1 = [
          {
            "custom_activity": {
                "label": "Accommodation",
                "region": "GB"
            },
            "parameters": {
                "money": costOfAccommodation*lengthOfStay,
                "money_unit": "gbp"
            }
        },
  
        {
          "custom_activity": {
              "label": modeOfTransportation, 
          },
          "parameters": {
              "passengers": 1,
              "distance": distance,
              "distance_unit": "km"
          }
      }
        
       
        ];
  
        const res = await axios.post('https://beta3.api.climatiq.io/custom-activities/batch', data1, {
          headers: headers1});
            const unknowndatainunknownformat = res.data;
            console.log(res);
            return {emissionOne: unknowndatainunknownformat.results[0].co2e, emissionTwo: unknowndatainunknownformat.results[1].co2e}
           
        
      }
      








