import React from 'react';
import {
  Box,
  Text,
  Center,
} from '@chakra-ui/react';
import {Nav} from '../components/bottom-nav'


export const Home = () => {
    return (
        <Box minH="100vh">
            <Box textAlign="center" fontSize="xl">
                <Box spacing={8}>
                    
                    <Text pt={10} bg="white">
                        Travel Sustainably
                    </Text>
                </Box>
             </Box>
            <Nav />
        </Box>
    );
}
