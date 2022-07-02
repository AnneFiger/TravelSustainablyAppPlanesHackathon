import { React, useState, useEffect } from 'react';
import axios from 'axios';
import {
    Box,
    Text,
  } from '@chakra-ui/react';
import {Nav} from '../components/bottom-nav'


export const ExampleFetch = () => {

  
  useEffect(() => {
    
      try {
        const headers1 = {
          'Authorization': 'Bearer XXXX',
          'Content-Type': 'application/json'
        };
      
        const data1 = [
          {
            "emission_factor": "passenger_vehicle-vehicle_type_car-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
            "parameters":{
                "distance": 100,
                "distance_unit": "km"
            }
        },
        {
            "emission_factor": "consumer_goods-type_snack_foods",
            "parameters": {
                "money": 15,
                "money_unit": "usd"
            }
        }
      ];
      const res = await axios.post('https://beta3.api.climatiq.io/batch', data1, {
      headers: headers1});
        const unknowndatainunknownformat = res.data;
        console.log(unknowndatainunknownformat);
        return { unknowndatainunknownformat };
      } catch (error) {
        return { error };
      }
    
    
    
    
  
  }, []);

  return (
    <>
        <Box>
            <Text size="large" color="black">
            Number
            </Text>
           <Text>{}</Text>
        </Box>
        <Nav />
    </>
  );
}

