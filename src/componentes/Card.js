import React from 'react';
import {
  Box,
  Flex,
} from '@chakra-ui/react';
import { Cores } from '../assets/Cores';


export function viewCard() {
    return (
      <Flex
        h="auto"
        w="auto"
        direction={'column'}
        flex={[1, 0, 'auto']}
        justify={'stretch'}
        margin={2}
        borderRadius={10}
        borderWidth="0px"
        textColor={'white'}
        background={Cores.yellowGreenCrayola}
        boxShadow="lg"
        p="6"
        rounded="md"
        textAlign="start"
        paddingLeft={3}
        paddingRight={3}
        paddingTop={3}
        paddingBottom={3}

      >
        <Box
          display={'flex'}
          width="100%"
          fontSize={15}
          fontWeight="bold"
          textColor={Cores.middleGreenYellow}
 
          mb="1"
        >
   
        </Box>
        <Box display={'flex'} fontSize={14} fontWeight="regular">
    
        </Box>
      </Flex>
    );
  }