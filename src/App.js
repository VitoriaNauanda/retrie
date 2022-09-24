import React, { useState, useEffect } from 'react';

import {
  ChakraProvider,
  Box,
  theme,
  Center,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { Cores } from './assets/Cores';
import Header from './componentes/Header';



function App() {

  return (
    <ChakraProvider theme={theme} h={"100%"}>
      <Box textAlign="center" fontSize="xl" bgColor={Cores.dark} h="100%">
          <HStack
            spacing={0}
            bgColor={Cores.mintCream}
            shadow={'2xl'}
            h="100%"
          >
            <Box h="100%" w="30%" borderRadius={40}>
              {/* Componente da esquerda */}
              <Header></Header>
            </Box>
              {/* Componente da direita*/}
            
          </HStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
