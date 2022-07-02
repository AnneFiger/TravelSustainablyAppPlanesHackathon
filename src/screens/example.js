import { React, useState, useEffect } from 'react';
import { helper } from './calculator';
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

      const result = await helper("Air_travel", 100, 2, 200);
    
      setEmissionOne(result.emissionOne);
      setEmissionTwo(result.emissionTwo)
      
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