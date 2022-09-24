import React, { useEffect } from 'react';
import { Cores } from '../assets/Cores';
import { Imagens } from '../assets/Imagens';
import WebFont from 'webfontloader';
import {
  ChakraProvider,
  Box,
  Stack,
  Input,
  HStack,
  Image,
  Text,
  Flex,
} from '@chakra-ui/react';

import Menu from './Menu';


function Header() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Quicksand']
      }
    });
  }, []);

  return (
    <HStack
      spacing={0}
      bgColor={Cores.white}
      h="100%"
      w="25vw"
      flex={1}
      flexDirection="column"
    >
      <Box
        borderTopStartRadius={10}
        flexDirection={'row'}
        position={'absolute'}>
        <Image
          src={Imagens.icon}
          marginTop="10"
          w='90%'
          h='90%'
        />
        <Text color={Cores.middleGreenYellow} fontFamily='Quicksand' fontWeight='bold'>Retrie</Text>
      </Box>
      <Image src={Imagens.header} width='100%'
      />


      <Flex
        h="10%"
        maxH={155}
        w="90%"
        direction={'column'}
        flex={[1, 0, 'auto']}
        justify={'stretch'}
        borderRadius={25}
        borderWidth="0px"
        textColor={'white'}
        background={Cores.cream}
        textAlign="start"
        paddingLeft={6}
        paddingRight={6}
        paddingTop={6}
        paddingBottom={6}>
        <Text textColor={Cores.greenMidle} fontFamily='Quicksand' fontWeight={"bold"} fontSize={18} marginTop={3}> Digite uma palavra</Text>
        <Input variant='outline'
          bg={Cores.white}
          borderRadius={15}
          borderWidth={2}
          focusBorderColor={Cores.greenMidle}
          textColor={Cores.greenMidle}
          width={"100%"}
          height={65}
          marginTop={2} />
      </Flex>
      <Menu  ></Menu>

    </HStack>


  );

}

export default Header;